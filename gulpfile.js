var browserify = require('browserify');
var eslint     = require('gulp-eslint');
var express    = require('express');
var gulp       = require('gulp');
var livereload = require('tiny-lr');
var path       = require('path');
var source     = require('vinyl-source-stream');
var stylus     = require('gulp-stylus');
var watchify   = require('watchify');

gulp.task('web-server', function() {
  var app = express();
  app.use(require('connect-livereload')({ port: 4070 }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.listen(4069);
});

gulp.task('css', function() {
  return gulp.src('src/css/app.styl')
    .pipe(stylus({
      'include css': true,
      sourcemap: {
        inline: true,
      }
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('watch-css', ['css'], function() {
  gulp.watch('src/css/**/*.styl', ['css']);
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
  var bundler = watchify(browserify('./src/js/app.js', watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', function(err) {
        console.error(err.message || err);
      })
      .pipe(source('app.js'))
      .pipe(gulp.dest('./public/'));
  }

  bundler.on('update', rebundle);
  bundler.on('log', console.error);

  return rebundle();
});

var LINT = [
  'src/js/**/*.js',
  'gulpfile.js',
];

gulp.task('lint', function() {
  return gulp.src(LINT)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watch-lint', ['lint'], function() {
  gulp.watch(LINT, ['lint']);
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

gulp.task('default', [
  'livereload',
  'watch-css',
  'watch-html',
  'watch-js',
  'watch-lint',
  'web-server',
]);
