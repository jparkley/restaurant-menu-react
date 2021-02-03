const currentTask = process.env.npm_lifecycle_event

console.log("task: ", currentTask)
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = {
  entry: "./src/App.js",
  mode: "development",
  output: {
    publicPath: "/",
    path: path.join(__dirname, "public"),
    filename: "bundled.js"
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/"
            }
          }
        ]
      }
    ]
  }
}

if (currentTask == "webpackDev" || currentTask == "dev") {
  config.devtool = "source-map"
  config.devServer = {
    port: 3000,
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
    historyApiFallback: { index: "index.html" }
  }
}

if (currentTask == "webpackBuild" || currentTask == "build") {
  config.mode = "production"

  // Replace "style-loader" with MiniCssExtractPlugin.loader for traditional CSS file inclusion
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader

  // Add plugins that are needed only for production
  config.plugins.push(new MiniCssExtractPlugin({ filename: "main.css" }), new CleanWebpackPlugin())

  config.output = {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundled.js",
    chunkFilename: "[name].[chunkhash].js"
  }
}

module.exports = config
