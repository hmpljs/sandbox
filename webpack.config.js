const path = require("path");
const html = require("html-webpack-plugin");

function createHtml(resolvePath, fileName) {
  return new html({
    template: path.resolve(__dirname, resolvePath),
    filename: fileName,
  });
}

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
    filename: "./[name].js",
    path: path.join(__dirname, "dist"),
    assetModuleFilename: "[path][name][ext]",
  },
  plugins: [createHtml("index.html", "index.html")],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    compress: true,
    port: 5000,
  },
};
