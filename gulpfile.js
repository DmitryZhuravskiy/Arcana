var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
 
// Get one .styl file and render
gulp.task('styl', function () {
  gulp.src('stylus/*.styl')
  	.pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	gulp.watch('stylus/*.styl', ['styl']);
});


// Default gulp task to run
gulp.task('default', ['styl']);