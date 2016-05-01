var path = require("path")
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack")
var assetsPath = path.join(process.cwd(), "public", "assets")

module.exports = {

	name: "production",

	// The base directory (absolute path!) for resolving the entry option.
	context: process.cwd(),

	entry: {
		app: [	
			"./src/index.js",
			"./src/core/global.scss",	// includes responsive grid
		]
	},

	output: {
		path: assetsPath,
		filename: "[name].js",
		publicPath: ""
	},

	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loader: "babel",								
				exclude: /node_modules/,					
			},
	        {
	        	test: /\.png$/,
	        	loader: "url-loader?limit=8192"
	        },			
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(														
							"css?modules&localIdentName=[local]__[hash:base64:5]!postcss!sass"
						),				
		    	exclude: /node_modules/
			}
		]
	},

	postcss: [
		require('autoprefixer')
	],

	resolve: {
		extensions: ["", ".js", ".jsx", ".css"],
		modulesDirectories: [
			'src', 'node_modules'
		]
	},	

	plugins: [		
	    // Order the modules and chunks by occurrence.
	    // This saves space, because often referenced modules
	    // and chunks get smaller ids.
	    new webpack.optimize.OccurenceOrderPlugin(),		
		new HtmlWebpackPlugin({
			title: "ReactKart",
			template: "template.html"
		}),
		new ExtractTextPlugin('[contenthash].css', { allChunks: true }),
	    new webpack.optimize.UglifyJsPlugin({
	    	compressor: {
	    		warnings:false
	    	}
	    }),		
		new webpack.DefinePlugin({
			'process.env': { 
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production') 
			}			
		})
	]
}