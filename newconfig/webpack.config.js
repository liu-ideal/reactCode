const path = require('path');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
  entry:"./src/main.jsx",
  output:{
    filename:"bundle.js",
    path:path.resolve(__dirname,'./dist')
  },
  mode:'production',
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env','@babel/preset-react']
          }
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader',options:{modules:true}}
        ]
      },
      {
        test:/\.scss$/,
        use:[
          // {loader:'style-loader'},
          {
            loader:MiniCssExtractPlugin.loader,
            options:{publicPath:'./'}
          },
          {loader:'css-loader',options:{modules:false}},
          {loader:'sass-loader'}
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  // devtool: 'cheap-module-eval-source-map',
  resolve: {
  extensions: [".js", ".jsx", ".css"]
}
}
