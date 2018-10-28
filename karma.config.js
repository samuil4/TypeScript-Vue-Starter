// Karma configuration
var webpackConfig = require('./webpack.config.test.js');
module.exports = function(config) {
  config.set({
    // Paths
    basePath: '',
    exclude: [],
    files: [{ pattern: 'src/**/*.test.ts', watch: false }],

    // Module processing
    preprocessors: {
      // Process all *test* modules with webpack
      // (it will handle dependencies)
      'src/**/*.test.ts': ['webpack', 'sourcemap'],
    },
    // Targets
    browsers: ['Chrome'],
    // Reporters
    reporters: ['dots'],
    logLevel: config.LOG_INFO,
    colors: true,
    // Test framework configuration
    frameworks: ['jasmine'],
    // Runner configuration
    port: 9876,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity,
    /* OTHER CONFIGURATION */
    // Webpack config
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only',
    },
  });
};
