var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
      { test: /\.scss$/,include: path.resolve(__dirname, 'app'), loader: 'style!css!sass?sourceMap'},
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader'},
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192'},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,loader : 'file-loader'}

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
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};