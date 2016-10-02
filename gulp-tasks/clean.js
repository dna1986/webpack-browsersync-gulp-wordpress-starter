var gulp = require('gulp');
var del = require('del');
var paths   = gulp.paths;

gulp.task('clean:build', function () {
  return del([paths.themeDestFolder +'/**'] , {force : true});
});
