const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: [ 'vue-style-loader', 'css-loader' ] }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      title: 'Vue 2 app',
      templateContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
            <title>Vue 2 app</title>
            <link rel="icon" href="data:,">
          </head>
          <body>
            <div id="app"></div>
          </body>
        </html>
      `
    })
  ]
}