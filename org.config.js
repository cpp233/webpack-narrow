const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = (env, argv) => {
  console.log(env, argv);

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    // entry: ['./src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
    },
    target: 'web', // 如果有browserslist 则加上此行
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
      ],
    },
    plugins: [
      argv.mode === 'production'
        ? new BundleAnalyzerPlugin({ analyzerPort: 8919 })
        : new webpack.DefinePlugin({
            BACKEND_URL: JSON.stringify('宏定义'),
          }),
    ],
  };
};
module.exports = config;
