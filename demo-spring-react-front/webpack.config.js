const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
const PATHS = {
  build: path.join(__dirname, 'dist')
};

module.exports = {
  entry: './src/index.js',

  output: {
    path: PATHS.build,
    filename: 'app-bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    port: 8008,
		proxy: {
			"/**": {
				target: "http://localhost:8090"
			}
		}
	},
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
};
