
'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WatchIgnorePlugin = require('watch-ignore-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: ['./browser/js/app.js', './browser/scss/main.scss'],
  output: {
    path: __dirname + '/public',
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  module: {
    preLoaders: [{ test: /\.jsx?$/, loaders: ['eslint'] }],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css!sass?sourceMap')
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: false
  },
  plugins: [
    new ExtractTextPlugin("style.css", {allChunks: true}),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.DefinePlugin({
      GA_TRACKING_CODE: JSON.stringify('UA-81436775-1'),
      GA_CONFIG: {}
    }),
    new WatchIgnorePlugin([
            path.resolve(__dirname, './node_modules/'),
    ])
  ]
}





// 'use strict'
//
// const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
//
// module.exports = {
//   devtool: 'source-map',
//   watch: true,
//   entry: ['./browser/js/app.js', './browser/scss/main.scss'],
//   output: {
//     path: __dirname + '/public',
//     filename: 'main.js'
//   },
//   stats: {
//     error: true
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx', '.scss', '.css']
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
//       { test: /\.json$/, loader: 'json-loader' },
//       {
//         test: /\.s?css$/,
//         loader: ExtractTextPlugin.extract('style?sourceMap', 'css!sass?sourceMap')
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin("style.css", {allChunks: true}),
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': '"production"'
//       }
//     }),
//     // new webpack.optimize.UglifyJsPlugin({
//     //   compress:{
//     //     warnings: true
//     //   }
//     // })
//   ]
// }
