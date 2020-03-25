const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: [
      './src/main.js', './src/scss/main.scss'
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
          },
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader, 
              'css-loader',
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: true }
              },
            ]
          },
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
};