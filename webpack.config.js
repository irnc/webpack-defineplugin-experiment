// This file would be read by webpack command automatically.

const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { CUSTOM: '"custom"' } }),
  ],
};
