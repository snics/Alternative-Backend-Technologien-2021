const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/.build`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
};
