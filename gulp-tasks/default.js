var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  return runSequence(['webpack']);
});


// gulp.task('build', runSequence(['clean:src', 'copy:src']));
