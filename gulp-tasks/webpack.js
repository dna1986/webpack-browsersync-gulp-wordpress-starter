var gulp    = require('gulp');
var webpack = require('webpack-stream');
var paths   = gulp.paths;
var path = require('path');

gulp.task("webpack", function() {
    // run webpack
    return gulp.src(path.join(paths.appAssetsFolder, 'entry.js'))
      .pipe(webpack(require(paths.webpackConfig)))
      .pipe(gulp.dest(paths.appBuildFolder))
});
