const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
}
