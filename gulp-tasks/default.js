var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('init', ['build:ui']);

gulp.task('default', function() {
  return runSequence('webpack');
});
