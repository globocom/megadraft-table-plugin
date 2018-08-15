/*
 * Copyright (c) 2016, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */
const path = require("path")


module.exports = {
  entry: [
    "./src/plugin.js"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "megadraft-table-plugin.js",
    library: "megadraft-table-plugin",
    libraryTarget: "umd"
  },
  externals: {
    "megadraft": "Megadraft",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};
