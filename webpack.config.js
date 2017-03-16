
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    entry:'./app/index.js',
    output:{
      path:__dirname + '/app',
      filename: "bundle.js" //内存中的打包文件,提升热更新效率
    },
    module:{
        loaders:[
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.scss$/, loader: 'style!css!sass' },
          { test: /\.js$/, loader:'babel', query:{ presets:['latest']}, exclude: path.resolve(__dirname, node_modules) },
          //开发环境可以不用配 图片转字符流,直接用原始的图片
          // { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },
          // { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
          //配合路由require做html热更新
          // { test: /\.(htm|html)$/i,loader: 'html-withimg-loader'},
          // { test: /\.html$/,loader: "html-loader"}
        ]
    },

    //这个配置在 npm scripts里也可以 
    //webpack-dev-server --devtool eval --progress --colors --hot --open --content-base app --history-api-fallback
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        host: '0.0.0.0',
        port: 8080,
        open:true //自动打开页面,和OpenBrowserPlugin 插件功能一样
    },
      //插件项
    plugins: [
        // new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new HtmlWebpackPlugin({
          template: __dirname + '/app/index.html',
          filename: 'index.html'
        }),
    ]

}