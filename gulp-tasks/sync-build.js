var gulp = require('gulp');
var fileSync = require('gulp-file-sync');
var paths   = gulp.paths;
var path = require('path');

gulp.task('sync:build', function() {
    fileSync(paths.appBuildFolder, path.join(themeDestFolder, 'build'), {recursive: true});
});
