const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//https://blog.csdn.net/qq_36242361/article/details/90709258
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Output Management',
			hash: true,
			filename: 'index.html'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
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
