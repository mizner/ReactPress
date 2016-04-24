var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./assets/js/react/app.jsx' // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	devServer: {
		contentBase: "./build",
			noInfo: true, //  --no-info option
			hot: true,
			inline: true
		},
	plugins: [
		new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
	]
};
