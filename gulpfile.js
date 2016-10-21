var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

var paths = {
  scss: 'scss/',
  dev: 'dev/'
};

gulp.task('sass', function() {
  return gulp.src([
    paths.scss + 'main.scss'
  ])
  .pipe(sass({outputStyle: 'compact'}))
  .pipe(gulp.dest(paths.dev))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch([paths.scss + '**/*.scss'], ['sass']);
});

gulp.task('dev', ['sass'], function() {
  browserSync.init({
    server: true
  });
  gulp.watch([paths.scss + '**/*.scss'], ['sass']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['dev']);
