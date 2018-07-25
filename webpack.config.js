const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {

    return{
        context: __dirname,
    	entry: {
          "apirestusfx": path.join(__dirname, 'src/index.js'),
        },
        output: {
          path: path.join(__dirname, 'chat'),
          filename: 'js/[name].[hash].js',
          publicPath: '',
          chunkFilename: 'js/[id].[chunkhash].js',
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                          presets: ['es2015', 'react', 'stage-2'],
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: { minimize: false }
                    }]
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader,'css-loader']
                }
            ]
        },
        devServer: {
            host: '0.0.0.0',
            historyApiFallback: true,
            contentBase: './',
            port: 9000,
            inline: true
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./index.html",
                filename: "./index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[chunkhash].css",
                chunkFilename: "[id].css"
            })
        ]
    }
};