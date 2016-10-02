var webpack = require("webpack");
var path = require("path");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./config');

const PROD = process.env.NODE_ENV || 0;
console.log(PROD);
module.exports = {
    watch : !PROD,
    progress : true,
    entry: {
      app: path.join(__dirname, 'assets/entry.js'),
      vendor: ["./semantic/dist/semantic.js", "./semantic/dist/semantic.css"],
    },
    // output: {
    //   path: path.join(__dirname, "theme/js"),
    //   filename: "[name].js",
    //   chunkFilename: "[name]_[chunkhash].js"
    // },
    output : {
      path: __dirname,
      filename: "bundle.js"
    },
    module: {
        preLoaders: [
          //  {
          //    test: /\.js$/,
          //    exclude: [/node_modules/,/semantic/],
          //    loader: 'jshint-loader'
          //  }
        ],
        loaders: [
            {
              test: /\.css$/,
              // loaders: ['style-loader', 'css-loader']
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
              // a regular expression that tests what kind of files to run through this loader.
              // As you can see, we have added a regex to test all files with an es6 extension.
              test: [/\.js$/, /\.es6$/],

              // which files the loader should exclude/ignore.
              //  We have added the node_modules folder
              exclude: /node_modules/,

              // the name of the loader we are going to use
              loader: 'babel-loader',

              // You can pass options to the loader by writing them as a query string
              //  or by using the query property as we have done above
              query: {
                presets: ['react', 'es2015']
              }
            },
            {
               test: /\.png$/,
               loader: "url-loader?limit=100000"
             },
             {
               test: /\.jpg$/,
               loader: "file-loader"
             },
             {
               test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
               loader: 'url?limit=10000&mimetype=application/font-woff'
             },
             {
               test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
               loader: 'url?limit=10000&mimetype=application/octet-stream'
             },
             {
               test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
               loader: 'file-loader'
             },
             {
               test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
               loader: 'url?limit=10000&mimetype=image/svg+xml'
             }
        ]
    },
      plugins: getPlugins(),
      resolve: {
        extensions: ['', '.js', '.es6']
      }
};


function getPlugins(){

  var plugins = [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),

      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery',
          'window.jQuery': 'jquery'
      }),

      new ExtractTextPlugin("[name].css")
  ];


  if(!PROD) {
    plugins.push(new BrowserSyncPlugin({
      proxy: config.serverURL,
      files : [__dirname + '/*' ,__dirname + '/build/*']
    }));
  } else {
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
  }

  return plugins;
}
