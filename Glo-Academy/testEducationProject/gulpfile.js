var gulp = require('gulp');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var minify = require('gulp-clean-css');
var browserSync = require('browser-sync');



// Static Server + watching scss/html files
gulp.task('serve', function(done) {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/less/*.less", gulp.series('less'));
    gulp.watch("src/*.html").on('change', () =>{ 
    	browserSync.reload();
    	done();
    });

    done();
});

gulp.task('less', function (done) {
  return gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(concatCss("style.css"))
    .pipe(minify())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream());

    done();
});


gulp.task('default', gulp.series('less','serve'));

