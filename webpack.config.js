const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
  filename: "bundle.css"
});
module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve("./public/index.html")],
        use: {
          loader: "file-loader",
          query: {
            name: "[name].[ext]"
          }
        }
      },
      {
        test: /\.scss$/, // made scss
        use: extractPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /(\.css$)/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "anarock.bundle.js"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    })
  ],
  stats: { children: false }
};
