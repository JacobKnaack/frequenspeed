'use strict'

const webpack =  require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractText = require('extract-text-webpack-plugin')

var loaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: function() {
        return [autoprefixer]
      }
    }
  },
  {
    loader: 'sass-loader'
  }
]

module.exports = {
  entry: `${__dirname}/src/entry.js`,
  plugins: [new ExtractText('bundle.css')],
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractText.extract({
            fallback: 'style-loader',
            loader: loaders
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
        options: {
          presets: ['es2015'],
          compact: false
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  }
}
