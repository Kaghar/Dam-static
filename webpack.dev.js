const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
    mode: 'development',
    
    module: {
        rules:[
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:() => [autoprefixer({ grid: 'autoplace' })]
                            
                        }
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: [ 'style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:() => [autoprefixer({ grid: 'autoplace' })]
                        }
                    },'sass-loader'
                ]
            },
        
        ]
    }
  
})
