const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e?)g|gif)/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};