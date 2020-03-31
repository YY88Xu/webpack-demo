const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//https://blog.csdn.net/qq_36242361/article/details/90709258
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	entry: {
		app: './src/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Output Management',
			hash: true,
			filename: 'index.html'
		}),
		new webpack.NamedChunksPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	performance: {
		hints: "warning"
	}
}
