var path = require('path')
var webpack = require('webpack')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
var buildPath = path.resolve(__dirname, 'dist')
var mainPath = path.resolve(__dirname, 'src', 'index.jsx')

var config = {

  devtool: 'cheap-module-source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})],
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      styles: path.join(__dirname, 'styles')
    }
  }
}

module.exports = config
