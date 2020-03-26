const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: [
      './src/main.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              use: ['babel-loader']
          }
      ]
  }
};