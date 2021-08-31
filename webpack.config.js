const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

const config = (env, argv) => {
  console.log(env, argv);

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    // entry: ['./src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
    },
    externals: [
      {
        react: 'React',
        'react-dom': 'ReactDOM',
        antd: true,
        jszip: 'JSZip',
        xlsx: 'XLSX',
        jquery: 'jQuery',
        jqueryui: true,
      },
      /(antd\/dist\/antd.css)/g, // 防止打包antd巨大的css
    ],

    target: 'web', // 如果有browserslist 则加上此行
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
    },

    devtool: 'source-map',

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: 'file-loader',
        },
      ],
    },
    plugins: [
      // new webpack.DefinePlugin({
      //   BACKEND_URL: JSON.stringify('宏定义'),
      // }),
      argv.mode === 'production'
        ? new BundleAnalyzerPlugin({ analyzerPort: 8919 })
        : new webpack.DefinePlugin({
            BACKEND_URL: JSON.stringify('宏定义'),
          }),
      // new CompressionPlugin({
      //   test: /\.js(\?.*)?$/i,
      //   algorithm: 'gzip',
      //   threshold: 8192,
      //   minRatio: 0.8,
      // }),
    ],
  };
};
module.exports = config;
