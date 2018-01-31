const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public', 'js'),
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hotOnly: true,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin(),
  ],
};
