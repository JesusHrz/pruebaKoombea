const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = (env)=>{

	const plugins = [ new ExtractTextPlugin("css/style.css") ]

	return {
		entry: path.resolve(__dirname, 'src/index.js'),
		output: {
	    path: path.resolve(__dirname, 'dist/'),
	    filename: 'js/bundle.js'
	  },
		devServer: {
			publicPath: '/dist',
			host: '0.0.0.0',
			port: 9000
		},
		module: {
			rules: [
					{
						test: /\.css$/,
						use: ExtractTextPlugin.extract({
						use: [
								{
									loader: 'css-loader',
									options: {
										minimize: true,
									}
								}
							]
						})
					},
					{
		        test: /\.js$/,
		        exclude: /(node_modules)/,
		        use: {
		          loader: 'babel-loader',
		          options: {
		            presets: ['es2015', 'react', 'stage-2']
		          }
		        }
	      	}
				]
		},
		plugins
	}
}
