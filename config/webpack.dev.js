var path = require("path")

var webpack=require("webpack")
var config=require("./config")
const merge = require('webpack-merge')
const baseWebpack=require("./webpack.base.js")
// console.log('---------------------')
// console.log(config.dev.outputPath)
module.exports = merge(baseWebpack,{
  devServer:{
      contentBase:'./',
      host:config.dev.host,
      port:config.dev.port,
      watchContentBase:true,
      hot:true,
      inline:true,
      open:config.dev.browserOpen,
      before:config.dev.before,
      proxy:config.dev.proxy,
      historyApiFallback:true
  },
  devtool:config.dev.devtool,
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
})
