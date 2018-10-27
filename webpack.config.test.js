'use strict';
// This is the webpack config used for unit tests.

const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              indentedSyntax: true,
            },
          },
        ],
      },
    ],
  },
  devtool: '#source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader',
    },
  },
  plugins: [],
});

// no need for app entry during tests
delete webpackConfig.entry;
delete webpackConfig.optimization;

module.exports = webpackConfig;
