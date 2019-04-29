const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const ExtractPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

// const isDev = process.env.NODE_ENV === 'development'

const definePlugin = [
  new webpack.DefinePlugin({
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]
const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  hot: true
}

let config

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  resolve: {
    alias: {
      'vue': '../node_modules/vue/dist/vue.esm.js'
    }
  },
  plugins: definePlugin.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
