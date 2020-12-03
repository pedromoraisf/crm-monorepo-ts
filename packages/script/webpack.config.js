/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../../node_modules"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@test": path.resolve(__dirname, "__test__"),
    },
    fallback: {
      path: false,
    },
  },
  devtool: "eval-source-map",
  output: {
    publicPath: "dist",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
