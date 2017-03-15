
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');

module.exports={
    entry:'./app/index.js',
    output:{
        path:__dirname + '/app',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test:/\.scss/,
                loader:'style!css!sass'
            },
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:'babel',
                query:{
                    presets:['latest']
                }
            },
            {
                test:/.(png|jpg|svg)$/, 
                loader: "url?limit=50000"
            }
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