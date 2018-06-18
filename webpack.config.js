const { join } = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

// Initial configurations
const PATH = {
  dist: join(__dirname, "dist"),
  src: join(__dirname, "src"),
  root: join(__dirname, ""),
};

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
      index: ["webpack/hot/poll?1000", "./src/index.ts"],
    },
    output: {
      path: PATH.dist,
      filename: "[name].js",
      publicPath: "/",
      pathinfo: true,
    },
    mode: env.production ? "production" : "development",
    stats,
    devtool,
    watch: !env.production,
    externals: [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })],
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
    plugins: [
      new StartServerPlugin("index.js"),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
      }),
    ],
  };

  if (env.production) {
    delete tsBundleConfig.output.pathinfo;
    delete tsBundleConfig.devtool;
    tsBundleConfig.entry.index.shift();
    tsBundleConfig.stats = "normal";
    tsBundleConfig.externals = [nodeExternals()];
    tsBundleConfig.plugins = [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": '"production"',
      }),
    ];
  }
  const config = [tsBundleConfig];
  return config;
};
