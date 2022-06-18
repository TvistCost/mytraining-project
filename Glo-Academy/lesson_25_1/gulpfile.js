const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('minify-css', function () {
  return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify-html', function () {
  return gulp.src('*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('dist/html/'));
});

gulp.task('minify-js', function () {
  gulp.src('slick/*.js')
      .pipe(jsmin())
      // .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/js/'));
});


