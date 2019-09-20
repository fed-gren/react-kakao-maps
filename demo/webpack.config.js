const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
//If want use .env.development or .env.production file, you have to set path in config(). default path: ./.env
//refer https://www.npmjs.com/package/dotenv
const myEnv = require("dotenv").config();

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },

      {
        test: /\.(html)$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      KAKAO_MAP_API_URL: myEnv.parsed.KAKAO_MAP_API_URL
    })
  ]
};
