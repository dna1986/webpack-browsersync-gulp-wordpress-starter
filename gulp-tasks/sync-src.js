var gulp = require('gulp');
var fileSync = require('gulp-file-sync');
var paths = gulp.paths;


gulp.task('sync:src', function() {
    fileSync(paths.appSourceFolder, paths.themeDestFolder, {recursive: true, ignore : 'build'});
});
