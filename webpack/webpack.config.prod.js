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
			"./src/index.js"
		]
	},

	output: {
		path: assetsPath,
		filename: "[name].js",
		publicPath: "/"
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
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
							'style-loader',
							'css-loader?module&localIdentName=[local]__[hash:base64:5]',
							'postcss-loader'
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
		new HtmlWebpackPlugin({
			title: "ReactKart",
			template: "template.html"
		}),
		new ExtractTextPlugin('[contenthash].css', { allChunks: true }),
		new webpack.DefinePlugin({
			'process.env': { 
				NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production') 
			}			
		})
	]
}