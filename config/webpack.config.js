const path = require('path');

module.exports = {
    mode: 'production',
    externals: {
        'react': 'react',       // Case matters here !
        'react-dom': 'reactDOM' // Case matters here !
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.ts$|\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    output: {
        clean: true,
        filename: 'index.js',
        globalObject: 'this',
        library: 'UILibrary',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './../dist'),
        umdNamedDefine: true,
    },
};
