const path = require('path');
const WebpackBuildTimingPlugin = require('webpack-build-timing-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'example_dist'),
    filename: '[name].chunk.js',
  },
  plugins: [
    new WebpackBuildTimingPlugin()
  ],
  resolve: {
    fallback: {
      fs: false
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
