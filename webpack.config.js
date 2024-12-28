const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4|webp)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8192, // Inline files smaller than 8KB as Base64
          },
        },
        generator: {
          filename: "images/[name].[hash][ext]", // Output directory and naming pattern
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "utils/index.html"),
    }),
  ],
  devServer: {
    port: 3000,
    static: "./public",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
