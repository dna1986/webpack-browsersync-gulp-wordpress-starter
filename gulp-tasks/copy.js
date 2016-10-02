var gulp = require('gulp');
var cache = require('gulp-cached');
var debug = require('gulp-debug');
var runSequence = require('run-sequence');
var del = require('del');
var paths   = gulp.paths;


gulp.task('copy:src', function(){
  return gulp.src([
      paths.srcFolder + '/**/*.php',
      paths.srcFolder + '/*.{php,css}',
     !paths.srcFolder + '/semantic',
     !paths.srcFolder + '/theme'
   ])
    .pipe(cache('coping'))
    .pipe(debug())
    .pipe(gulp.dest(paths.themeDestFolder))
});
