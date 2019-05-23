const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'David Wesst | Official Website',
        template: path.resolve(__dirname, 'src/index.html'),
        minify: {
          collapseWhitespace: true,
          removeComments: true
        }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(png|svg)$/,
              use: {
                  loader: 'file-loader',
                  options: {
                      outputPath: 'img',
                      name: '[name].[ext]'
                  }
              }
          },
          {
            test: /\.(woff(2)?|ttf|eot)$/,
            use: {
              loader: 'url-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]'
              }
            }
          }
      ]
  }
}