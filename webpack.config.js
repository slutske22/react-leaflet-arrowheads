var path = require('path')

module.exports = {
	entry: "./src/react-leaflet-arrowheads.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "react-leaflet-arrowheads.js",
		library: "ReactLeafletArrowheads",
		libraryTarget: 'umd'
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			}
		]
	},
	externals: {
		'react': {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React'
		},
		'react-dom': 'commonjs react-dom',
		'leaflet': {
			commonks: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L'
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			Root: 'ReactLeaflet'
		}
	}
}