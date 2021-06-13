const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', 
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    resolve:{
        extensions: ['.js', '.jsx', '.css',]
    },
    mode: 'development',
    module:{
        rules:[
                {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
                },
                {
                test: /\.html$/,
                use:[
                    { loader: 'html-loader'}
                ]
                },
                {
                test: /\.s[ac]ss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
                },
                {
                test:/\.(woff(2)?|otf|eot|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
                }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3002,
        open: true,
        historyApiFallback: true,
    }
}