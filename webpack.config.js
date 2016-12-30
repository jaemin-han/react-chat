var webpack = require("webpack");
var path = require('path');


// React code is not valid javascript (es6 -- not all browswers read)
// Take all these codes and transpile them into es5 -- all browsers can read

module.exports = {
  // entry point read here
  entry: {
    app: "./src/app.js"
  },

  // bundle/transpile into here
  output: {
    filename:"build/bundle.js",
        sourceMapFilename: "build/bundle.map"
  },
    devtool: '#source-map',
  // plugins: [
 //     new webpack.optimize.UglifyJsPlugin({minimize: true}),
  // ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
          presets:['react', 'es2015']
        }
      }
    ]
  }
}
