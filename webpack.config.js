var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: 'bundle.js'
	},
	resolve: {
		modules: [
			path.resolve(__dirname),
			'node_modules'
		],
		extensions: ['.js', '.css'],
		alias: {
			src: path.resolve(__dirname) + '/src',
			scss: path.resolve(__dirname) + '/src/css',
			js: path.resolve(__dirname) + '/src/js',
		},
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: [
					'babel-loader'
				] 
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader']
			}
		]
	},
	devServer: {
		progress: true,
		inline: true,
		historyApiFallback: {
			index: '/test/'
		}
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: 'test/index.html'
		})
	]
};

