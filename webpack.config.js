const webpack = require('webpack');
const path = require('path');

var config = {
    devtool: 'eval',
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.min.js',
        publicPath: '/public/',
    },
    devServer: {
        inline: true,
        port: 8088,
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
};

module.exports = config;
