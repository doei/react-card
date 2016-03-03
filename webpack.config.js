var webpack = require('webpack');

module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",
		"./index.jsx"
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
		        loader: 'react-hot-loader!babel'
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css!autoprefixer!stylus-loader'
			}
		]
	},
	resolve: {
		extensions: ["", ".js", ".jsx", ".styl"]
	},
	output: {
		path: __dirname + "/dist",
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
