const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
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
  plugins: [new HtmlWebpackPlugin({
    template: "./src/templates/template.html"
    })],
}