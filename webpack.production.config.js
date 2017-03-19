var webpack = require('webpack');
var path = require('path');
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
  entry: {
    vendor: ["angular", "angular-ui-router","angular-messages","angular-animate"],
    app: "./app/index.js"
  },
  output: {
    path: __dirname + '/build',
    // path: path.join(__dirname, 'build'),
    // publicPath: '', //资源路径前缀
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
              loader: "url-loader?limit=8192&name=/images/[name]-[hash:8].[ext]"
            },
            {
  　　　　　　  test: /\.(htm|html)$/i,
  　　　　　　  loader: 'html-withimg-loader'
    　　　　 },
            {
              test: /\.html$/,
              loader: "html-loader"
            }
        ]
        
    },
  plugins: [
    // 为什么删除总是会先执行呢?? webpack插件的执行顺序是什么??
    new CleanWebpackPlugin('build', {
      verbose: true,
      dry: false
    }),
   new ExtractTextPlugin("styles/[name]-[contenthash:8].css"),
   // new webpack.optimize.CommonsChunkPlugin('vendor', 'scripts/vendor.[chunkhash:6].js'),
   new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      // hash:false,    //为静态资源生成hash值
      // minify:{    //压缩HTML文件
      //     removeComments:true,    //移除HTML中的注释
      //     collapseWhitespace:false    //删除空白符与换行符
      // }
    }),
     // 去重插件
    new webpack.optimize.DedupePlugin(),
    // 根据使用率来预测分配序列
    new webpack.optimize.OccurenceOrderPlugin(),
    //压缩
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true
        },
        comments: false,
    })
  ]
};