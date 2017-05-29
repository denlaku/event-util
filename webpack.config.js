var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    index: "./src/index"
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  devtool: "cheap-module-source-map",
  module: {
    loaders: [
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, sourceMap: false})
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  }
};
