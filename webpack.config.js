const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = (env, args) => ({
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: "head",
            template: path.join(__dirname, 'src/index.html')
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'MODE': JSON.stringify(args.mode)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(jpe?g|ico|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                type: 'javascript/auto',
                test: /\.(config|json|txt)$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.(otf|ttf)$/i,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {sourceMap: (args.mode === 'development')}},
                    {loader: "sass-loader", options: {sourceMap: (args.mode === 'development')}}
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    output: {
        publicPath: '/'
    }
});
