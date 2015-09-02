const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'js', 'app.js'),
  ],

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        test: /\.js$/,
      },
    ],
  },

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public', 'js'),
  },
};
