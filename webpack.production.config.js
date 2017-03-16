var webpack = require('webpack');
var path = require('path');
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// var node_modules = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ENV = process.env.NODE_ENV || 'development';

module.exports = {
  // devtool: 'source-map',
  devtool: 'cheap-source-map',
  // entry: [
  //   path.resolve(__dirname, 'app/index.js'),
  // ],
  entry:'./app/index.js',
  output: {
    path: __dirname + '/build',
    // publicPath: '/',
    filename: "scripts/[name]-[chunkhash:8].js"
  },
  module:{
    loaders:[
            {
              test:/\.css$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
              test:/\.scss$/,
              loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
             { test: /\.js$/, loader:'babel', query:{ presets:['latest']}, exclude: /node_modules/ },
            {
              test:/\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
              loader: "url-loader?limit=8192&name=images/[name]-[hash:8].[ext]"
            },
            {
  　　　　　　  test: /\.(htm|html)$/i,
  　　　　　　  loader: 'html-withimg-loader'
    　　　　 },
  //           {
  //             test: /\.html$/,
  //             loader: "html-loader"
  //           }
        ]
        
    },
  plugins: [
    // 为什么删除总是会先执行呢?? webpack插件的执行顺序是什么??
    new CleanWebpackPlugin('build', {
      verbose: true,
      dry: false
    }),
   new ExtractTextPlugin("styles/[name]-[contenthash:8].css"),
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