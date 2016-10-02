var gulp = require('gulp');
var requireDir = require('require-dir');
var path = require('path');
var config = require('./config');

gulp.paths = {
    srcFolder       : path.join(__dirname, config.srcFolder || ''),
    webpackConfig   : path.join(__dirname, config.webpackConfig || 'webpack.config'),
    appSourceFolder : path.join(__dirname, config.phpSrc ||'src'),
    appAssetsFolder : path.join(__dirname, config.assets || 'assets'),
    appBuildFolder  : path.join(__dirname, config.buildPah || 'build'),
    themeDestFolder : path.join(__dirname, config.productionPath || '../webpack-build'),
    themeBuildDestFolder : path.join(__dirname, config.productionBuildPath || '../webpack-build')
};



requireDir('./gulp-tasks', {recurse: true});
