var path = require('path');

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
		extensions: ['.js', '.scss'],
		alias: {
			src: path.resolve(__dirname) + '/src',
			scss: path.resolve(__dirname) + '/src/scss',
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
				test: /\.scss$/,
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
	plugins: []
};

