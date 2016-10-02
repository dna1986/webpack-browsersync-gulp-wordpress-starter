var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = gulp.paths;
var path = require('path');

gulp.task('watch:src', function() {
  gulp.watch(path.join(pathpaths.appSourceFolder , '**/*.php'));
});
