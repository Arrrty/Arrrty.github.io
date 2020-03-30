const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: [
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: '#sourcmap',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: ['babel-loader']
          }
      ]
  }
};