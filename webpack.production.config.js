var webpack = require('webpack');
var path = require('path');
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ENV = process.env.NODE_ENV || 'development';

module.exports = {
  // devtool: 'source-map',
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/index.js'),
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle-[hash:6].js'
  },
  // module: {
  //   loaders:[
  //     { test: /\.css$/, loader: 'style!css' },
  //     { test: /\.scss$/, loader: 'style!css!sass' },
  //     { test: /\.js$/, loader:'babel', query:{ presets:['latest']}, exclude: path.resolve(__dirname, node_modules) },
  //     // { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },
  //     {test: /\.(png|jpg|gif)$/,loader: 'url?limit=8192,name=/images/[name]-[hash:6].[ext]'},
  //     { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' }
  //   ]
  // },

   module: {
        loaders: [{
                test: /\.html$/,
                loader: 'raw'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8192,name=/img/[name].[hash:6].[ext]'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
            }, {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }, 
            // { //外链
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader!postcss-loader")
            // }
            {  //内联
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass','postcss']
            }
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