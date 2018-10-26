const merge = require('webpack-merge');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
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
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'build-inspect.html',
    }),
  ],
  module: {
    rules: [],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
  },
  devtool: '#cheap-module-eval-source-map',
});

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}
