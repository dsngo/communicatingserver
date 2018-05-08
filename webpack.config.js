const { join } = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

// Initial configurations
const PATH = {
  dist: join(__dirname, "dist"),
  src: join(__dirname, "src"),
  root: join(__dirname, ""),
};
const developmentPort = 4000;

module.exports = (env = {}) => {
  const devtool = !env.production && "source-map";
  const stats = {
    colors: true,
    reasons: true,
    assets: true,
    errorDetails: true,
  };
  const extensions = [".ts", ".tsx", ".css", ".scss", ".js", ".json"];
  // Typescript compiling configurations
  const tsBundleConfig = {
    target: "node", //IMPORTANT TO PRESERVE PROCESS.ENV VARIABLES
    context: PATH.root,
    entry: {
      index: ["./src/server"],
    },
    output: {
      path: PATH.dist,
      filename: "[name].js",
      publicPath: "/",
      pathinfo: true,
    },
    mode: "development",
    stats,
    devtool,
    externals: [nodeExternals()],
    resolve: { extensions },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: PATH.src,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
      ],
    },
  };
  // Webpack configurations
  if (env.production) {
    delete tsBundleConfig.devtool;
    delete tsBundleConfig.output.pathinfo;
    tsBundleConfig.watch = false;
    tsBundleConfig.output = {
      path: PATH.dist,
      filename: "[name].js",
      publicPath: "/",
    };
    tsBundleConfig.stats = "normal";
  }
  const config = [tsBundleConfig];
  return config;
};
