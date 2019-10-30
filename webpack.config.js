const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
    ],
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 9000,
    quiet: true,
  },
};
