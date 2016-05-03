import { join } from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: join(__dirname, 'client/src/index.js'),
  output: {
    path: join(__dirname, 'client/dist/'),
    filename: 'bundle.js',
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: join(__dirname, 'client/src/'),
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'client/index.html'),
      inject: false,
    }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
};
