// development config
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./common')

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8989', // bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.js', // the entry point of our app
  ],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8989,
    disableHostCheck: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
})
