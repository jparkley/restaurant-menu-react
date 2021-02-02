const path = require("path")

module.exports = {
  entry: "./src/App.js",
  output: {
    publicPath: "/",
    path: path.join(__dirname, "public"),
    filename: "bundled.js"
  },
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
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
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader"
      }
    ]
  }
}
