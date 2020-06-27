'use strict'
var gulp = require('gulp');
var sass = require('gulp-sass');

var sass_start = gulp.task('sass', function () {
  gulp.src('src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/*.sass', ['sass']);
});

gulp.task('default', function(done) {
    gulp.series('sass')
    done();
})


exports.default = sass_start;