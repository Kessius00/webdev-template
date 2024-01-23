const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  devtool: false,

  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", //3. inject styles into DOM
        "css-loader",         //2. turns CSS into CommonJS
        "sass-loader"         //1. turns SASS into CSS
        ]
      }
    ]
  },

  plugins: [ 
    new CleanWebpackPlugin() //A webpack plugin to remove/clean your build folder(s)
    ],
});