const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
};
