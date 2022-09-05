const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  mode: 'development',
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    compress: true,
    historyApiFallback: true,
    port: 3005,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(woff|woff2)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'assets/fonts/[contenthash][ext]',
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'frontend/assets'),
          to: 'assets',
        },
        {
          from: path.resolve(__dirname, 'frontend/lib'),
          to: 'lib',
        },
      ],
    }),
    new Dotenv(),
  ],
}
