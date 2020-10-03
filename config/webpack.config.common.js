'use strict'

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const helpers = require('./helpers')
const isDev = process.env.NODE_ENV === 'development'

const webpackConfig = {
  entry: {
    main: helpers.root('src', 'main')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
      '@': helpers.root('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [helpers.root('src')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [helpers.root('src')]
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev, esModule: false } },
          { loader: 'postcss-loader', options: { sourceMap: isDev } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDev, esModule: false } },
          { loader: 'postcss-loader', options: { sourceMap: isDev } },
          { loader: 'sass-loader', options: { sourceMap: isDev } },
          { loader: 'sass-resources-loader', options: { resources: './src/scss/resources.scss' } }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          { loader: 'file-loader', options: { outputPath: 'img' } }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({ template: 'index.html' })
  ]
}

module.exports = webpackConfig
