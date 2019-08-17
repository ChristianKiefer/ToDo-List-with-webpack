/// <binding AfterBuild='Run - Production' />
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); 

module.exports = {
    entry: './AppAssets/js/site.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => ([
                                require("autoprefixer"),
                                require("precss"),
                            ]),
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: './AppAssets/lib/bootstrap.min.css', to: '' },
            { from: './AppAssets/lib/jquery.min.js', to: '' },
            { from: './AppAssets/img/favicon.ico', to: '' },
        ]),
    ],
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
