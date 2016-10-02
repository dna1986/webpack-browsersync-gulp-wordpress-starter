var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(){
  return runSequence('clean:build', ['copy:src', 'webpack:production']);
});
