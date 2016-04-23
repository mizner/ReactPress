var path = require('path');


module.exports = {
    entry: {
        app: ["./assets/app.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "app.js"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['es2015']
                }
            }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};