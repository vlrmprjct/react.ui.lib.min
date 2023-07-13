const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
    ],
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
