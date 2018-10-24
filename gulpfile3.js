var gulp = require('gulp');
var stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('stylus', function() {
  return gulp.src('stylus/*.styl')
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
    }))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(notify('Stylus SUCCESS'));
});
// Задаем таск вотчера, чтобы стили собирались автоматически, при сохранении stylus файлов
gulp.task('watch', function() {
  gulp.watch(['stylus/*.styl', 'stylus/inc/*.styl'], ['stylus']);
});

gulp.task('styl', function () {
    gulp.src('stylus/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
  gulp.watch('stylus/*.styl',('styl'))
});


gulp.task('default', ['stylus', 'watch']);