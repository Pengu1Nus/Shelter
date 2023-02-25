const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";
  const config = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? false : "source-map",
    watch: !isProduction,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "script.js",
      clean: true,
    },
    devServer: {
      open: true,
      static: {
        directory: path.join(__dirname, "./dist"),
      },
      compress: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(css|scss|sass)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          type: "asset/resource",
          loader: "image-webpack-loader",
          options: {
            mozjpeg: {
              progressive: true,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75,
            },
          },
          generator: {
            filename: "images/[name][ext]",
          },
        },
        {
          test: /\.html$/,
          use: ["html-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html",
      }),
      new HtmlWebpackPlugin({
        template: "./src/pages/our-pets.html",
        filename: "pets.html",
      }),
    ],
  };
  return config;
};
