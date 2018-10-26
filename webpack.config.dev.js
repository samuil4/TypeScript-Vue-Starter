const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.config');

module.exports = merge(baseWebpackConfig, {
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      maxSize: 0,
      minChunks: 1,
      minSize: 5000,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [],
  module: {
    rules: [],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
  },
  devtool: '#cheap-module-eval-source-map',
});
