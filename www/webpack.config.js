module.exports = {
	context: __dirname + '/app',
	entry: {
		'app': ['./js/app', './js/controllers.js', './js/services.js'],
	},
	output: {
		path: __dirname + '/public/js',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query:{
					presets: ['es2015']
				}
			}
		]
	}
};