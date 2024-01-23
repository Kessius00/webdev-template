const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(jpg|jpeg|gif|svg|png)$/i,
                type: "asset/resource",
                generator: {
                    filename: "imgs/[name].[hash].[ext]",
                }
            }
        ]
    },

}