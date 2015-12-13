var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      styles: path.join(__dirname, 'styles')
    }
  },
  devServer: {
    contentBase: __dirname + '/dist',
    hot: true
  }
};
