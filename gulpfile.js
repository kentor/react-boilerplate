const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

const processors = [
  autoprefixer,
  cssnext(),
];

gulp.task('css', function() {
  return gulp.src('src/css/app.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});

gulp.task('css:watch', ['css'], function() {
  gulp.watch('src/css/**/*', ['css']);
});

const staticFiles = [
  'src/index.html',
];

gulp.task('static', function() {
  return gulp.src(staticFiles, { base: 'src/' })
    .pipe(gulp.dest('public'));
});

gulp.task('static:watch', ['static'], function() {
  gulp.watch(staticFiles, ['static']);
});

gulp.task('default', [
  'css:watch',
  'static:watch',
]);
