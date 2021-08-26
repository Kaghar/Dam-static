const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs')
const pages =
  fs
    .readdirSync(path.resolve(__dirname, 'src'))
    .filter(fileName => fileName.endsWith('.html'))


module.exports = {
   
    entry: {
        // frontPage: './src/assets/js/frontPage.js',
        app: './src/assets/js/index.js',
    },
    output: {
        filename: './assets/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\m?.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },           
            {
                test: /\.(png|jpg|)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/icons/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.xml$/, loader: 'xml-loader'
                  
                   
                  
            },
            {
                test: /\.(html)$/,
                // use: ['html-loader']
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            noUiSlider: 'nouislider'
        }),
        new CleanWebpackPlugin(),
        ...pages.map(page => new HtmlWebpackPlugin({
            template: `./src/${page}`,
            filename: page,
            favicon: './src/assets/favicon/favicon.ico',
            
          })),
        new BrowserSyncPlugin(
        // BrowserSync options
        {
            // browse to http://localhost:3000/ during development
            host: 'localhost',
            port: 3000,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:3100/'
        },
        // plugin options
        {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
        }
        )
    ],
    externals: {
        $: "jquery",
        'jquery': 'jQuery'
    },
    resolve: {
        alias: {
          'waypoints': 'waypoints/lib'
        }
      }


}