var gulp = require('gulp');
var stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styl', function () {
    gulp.src('stylus/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch(['stylus/*.styl'],('stylus'))
});


gulp.task('default', ['styl', 'watch']);