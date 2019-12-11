const path = require('path');
const SRC_DIST = path.join(__dirname, 'client/src');
const DIR_DIST = path.join(__dirname, 'client/dist');

module.exports = {
  entry: `${SRC_DIST}/index.jsx`,
  output: {
    filename: 'main.js',
    path: DIR_DIST,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ]
  }
};