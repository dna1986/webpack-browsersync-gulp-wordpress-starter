var gulp    = require('gulp');
var webpack = require('webpack-stream');
var paths   = gulp.paths;
var path = require('path');


gulp.task("webpack:production", function() {
    // run webpack
    process.env.NODE_ENV = 'production';
    return gulp.src(path.join(paths.appAssetsFolder, 'entry.js'))
      .pipe(webpack(require(paths.webpackConfig)))
      .pipe(gulp.dest(paths.themeBuildDestFolder))
      .pipe(function(){
        process.env.NODE_ENV = '';
      })
});
