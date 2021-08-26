const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js')
const autoprefixer = require('autoprefixer')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  
  module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../..'
              }
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                     plugins:() => [autoprefixer({ grid: 'autoplace' })]

                 },
            },
            {
              loader: 'sass-loader'
             
            }
           
          ],
        }
       
      ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({ 
        filename: './assets/styles/style.css',
    }),
   
  ]
})
