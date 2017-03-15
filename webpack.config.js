
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports={
    // entry:'./app/index.js',
    entry: __dirname + "/app/index.js",
    output:{
        path:__dirname + '/app',
        filename:'bundle.js'
    },
    module:{
        loaders:[
          { test: /\.css$/, loader: 'style!css' },
          { test: /\.scss$/, loader: 'style!css!sass' },
          { test: /\.js$/, loader:'babel', query:{ presets:['latest']}, exclude: path.resolve(__dirname, node_modules) },
          { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },
          { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' }
        ]
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        host: '0.0.0.0',
        port: 8080
    },
      //插件项
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]

}