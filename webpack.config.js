const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // webpack will take the files from ./src/index
  entry: './src/index',

  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        exclude: /node_modules/,
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // and output it into /dist as bundle.js
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  devtool: 'eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
