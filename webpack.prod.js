const path = require('path');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = merge(common, {
    mode: "production",
    devtool: false,
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [
        new OptimizeCssAssetsPlugin(), new TerserPlugin()
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css"}), new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify:{
        // removeAttributeQuotes: true,  plugins: [new HtmlWebpackPlugin({
        //     template: "./src/template.html"
        // })],
        collapseWhitespace: true,
        removeComments: true
        }
    })],
    module:{ rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        
        ],
    },
});

