var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var cache = require('gulp-cached');
var envify = require('envify/custom');
var eslint = require('gulp-eslint');
var express = require('express');
var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('tiny-lr');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var replace = require('gulp-fingerprint');
var rev = require('gulp-rev');
var send = require('send');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watchify = require('watchify');

gulp.task('web-server', function() {
  var app = express();
  app.use(require('connect-livereload')({ port: 4070 }));
  app.get(/^[^\.]+$/, function(req, res) {
    send(req, 'index.html', { root: path.join(__dirname, 'public') })
      .pipe(res);
  });
  app.use(express.static(path.join(__dirname, 'public')));
  app.listen(4069);
});

gulp.task('css', function() {
  return gulp.src('src/css/app.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .on('error', function(err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public'));
});

gulp.task('watch-css', ['css'], function() {
  gulp.watch('src/css/**/*', ['css']);
});

gulp.task('build-css', function() {
  return gulp.src('src/css/app.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public'));
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('watch-html', ['html'], function() {
  gulp.watch('src/index.html', ['html']);
});

gulp.task('watch-js', function() {
  watchify.args.debug = true;
  var bundler = watchify(browserify('./src/js/app.jsx', watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', function(err) {
        console.error(err.message || err);
      })
      .pipe(source('app.js'))
      .pipe(gulp.dest('public'));
  }

  bundler.on('update', rebundle);
  bundler.on('log', console.error);

  return rebundle();
});

gulp.task('build-js', function() {
  return browserify('./src/js/app.jsx')
    .plugin('bundle-collapser/plugin')
    .transform(envify({
      NODE_ENV: 'production',
    }), { global: true })
    .transform('unreachable-branch-transform', { global: true })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify({
      compress: {
        unsafe: true,
        screw_ie8: true, //eslint-disable-line camelcase
      }
    }))
    .pipe(gulp.dest('public'));
});

var LINT = [
  './*.js',
  'src/js/**/*',
];

gulp.task('lint', function() {
  return gulp.src(LINT)
    .pipe(cache('linting'))
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch-lint', ['lint'], function() {
  gulp.watch(LINT.concat('**/.eslintrc'), ['lint']);
});

gulp.task('livereload', function() {
  var tinylr = livereload();
  tinylr.listen(4070);

  gulp.watch('public/**/*', function(event) {
    var filename = require('path').relative(__dirname, event.path);
    tinylr.changed({
      body: {
        files: [filename],
      },
    });
  });
});

gulp.task('build-rev', ['build-css', 'build-js'], function() {
  return gulp.src([
    'public/app.css',
    'public/app.js'
  ]).pipe(gulp.dest('public'))
    .pipe(rev())
    .pipe(gulp.dest('public'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('public'));
});

gulp.task('build', ['build-rev'], function() {
  gulp.src('src/index.html')
    .pipe(replace(require('./public/rev-manifest.json')))
    .pipe(gulp.dest('public'));
});

gulp.task('default', [
  'livereload',
  'watch-css',
  'watch-html',
  'watch-js',
  'watch-lint',
  'web-server',
]);
