var config = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js',
    },

    devServer: {
        historyApiFallback: true,
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
};

module.exports = config;
