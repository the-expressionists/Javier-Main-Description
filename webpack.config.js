const path = require('path');
const webpack = require('webpack');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

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
    rules: [{
      test: /\.[tj]sx?$/,
      include: [path.resolve(__dirname, 'client/src')],
      loader: 
      // [
        'babel-loader',
        // "style-loader",
        // "css-loader",
        // "sass-loader",
      // ],
      options: {
        presets: ['@babel/react', '@babel/preset-env']
      }
    }]
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