const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [

      {
        //CSS
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },

      {
        //SASS
        test: /\.scss$/i,
        use: ["style-loader", //3. inject styles into DOM
        "css-loader",         //2. turns CSS into CommonJS
        "sass-loader"         //1. turns SASS into CSS
        ]
      },

      {
        //HTML
        test: /\.html$/i,
        use: ["html-loader"]
      },

      {
        //IMAGES
        test: /\.(png|svg|jpe?g|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "imgs/[name].[hash].[ext]",
        }
      },

      {
        //FONTS
        test: /\.(woff2?|ttf|eot)(\?v=\w+)?$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]"
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/templates/template.html"
    })],
}