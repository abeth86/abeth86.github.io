var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'src', 'index.jsx');

var config = {

  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    },
    {
      test: /\.less$/,
      loader: 'style!css!less'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      styles: path.join(__dirname, 'styles')
    }
  }
};

module.exports = config;
