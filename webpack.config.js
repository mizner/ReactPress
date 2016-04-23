var precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./assets/app.js",
    output: {
        path: './build',
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            }
            // {
            //     test: /\.css$/,
            //     loader: "style-loader!css-loader!postcss-loader"
            // }

        ]
    },
    postcss: function () {
        //return [require('autoprefixer'), require('precss')];
        return [precss, autoprefixer];
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
};
