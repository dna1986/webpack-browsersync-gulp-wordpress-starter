var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');
var debug = require('gulp-debug');
var paths   = gulp.paths;


gulp.task('lint', function(){
  return gulp.src(paths.appSourceFolder + '/*.js')
    .pipe(cache('linting'))
    .pipe(debug())
    .pipe(jshint())
    .pipe(jshint.reporter())
});
