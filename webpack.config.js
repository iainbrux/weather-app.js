const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js",
    buttonsConfig: "./src/buttonsConfig.js",
    getWeather: "./src/getWeather.js"
  },
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
