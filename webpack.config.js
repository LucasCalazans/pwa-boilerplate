const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, args) => {
  const development = args.mode === 'development';

  return {
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    entry: ['@babel/polyfill', './src/index.jsx'],
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'head',
        template: path.join(__dirname, 'src/index.html'),
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          MODE: JSON.stringify(args.mode),
        },
      }),
      new CopyPlugin(['./public']),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: development ? 'inline-source-map' : 'none',
    module: {
      rules: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(jpe?g|ico|png|gif|svg)$/i,
          loader: 'file-loader?name=img/[name].[ext]',
        },
        {
          test: /\.(otf|ttf)$/i,
          loader: 'file-loader?name=fonts/[name].[ext]',
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: { sourceMap: development },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: development },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
    },
    output: {
      publicPath: '/',
    },
  };
};
