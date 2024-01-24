const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "production",

  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  module: {
    rules: [

        {
        //CSS
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 
        "css-loader"
        ]
        },

        {
        //SASS
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader,      //3. Extract CSS into files
        "css-loader",                           //2. turns CSS into CommonJS
        "sass-loader"                           //1. turns SASS into CSS
        ]
        },

    ]
  },
  
  optimization: {
    minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        `...`,
        new CssMinimizerPlugin(),             //Just like optimize-css-assets-webpack-plugin but more accurate with source maps and assets using query string, allows caching and works in parallel mode.
        
    ],
  },

  plugins: [ 
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css"}),      //This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
    new CleanWebpackPlugin(),       //A webpack plugin to remove/clean your build folder(s)
    
    new HtmlWebpackPlugin({         //simplifies creation of HTML files to serve webpack bundles, supplying a template
      template: "./src/templates/template.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
  ],
});