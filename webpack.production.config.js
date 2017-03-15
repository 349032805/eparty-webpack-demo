var webpack = require('webpack');
var path = require('path');
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  // devtool: 'source-map',
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/index.js'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.[hash:6].js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.js$/, loader:'babel', query:{ presets:['latest']}, exclude: path.resolve(__dirname, node_modules) },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('build', {
      verbose: true,
      dry: false
    }),
   new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html'
    }),
    // new webpack.DefinePlugin({
    //   'process.env':{
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.DedupePlugin(),
    // new uglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};