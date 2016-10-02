//  we require the strip-loader npm module
var WebpackStripLoader = require('strip-loader');

// we require the original webpack configuration file
var devConfig = require('./webpack.config.js');

//  we create a new object, and pass in the test and exclude keys as seen before.

// Worth noting is the line. =>  loader: WebpackStripLoader.loader('console.log')
// Here we are asking strip-loader to remove any console.log statements from our build.
 // WebpackStripLoader.loader() takes any number of arguments.
var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}

// we push the new object into our loaders array from our original config.
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
