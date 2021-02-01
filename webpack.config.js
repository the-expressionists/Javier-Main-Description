const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const isDevelopment = true;

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

module.exports = {
  mode: 'development',
  entry: {
    mainDescription: './client/src/mainDescription.jsx',
    container: './client/src/container.jsx'
  },

  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(jss|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CompressionPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.module\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false
    }
  }
}