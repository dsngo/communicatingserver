const { join } = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

// Initial configurations
const PATH = {
  dist: join(__dirname, 'dist'),
  src: join(__dirname, 'src'),
  root: join(__dirname, ''),
};
const developmentPort = 4000;

module.exports = (env = {}) => {
  const devtool = !env.production && 'source-map';
  const stats = {
    colors: true,
    reasons: true,
    assets: true,
    errorDetails: true,
  };
  const extensions = ['.ts', '.tsx', '.css', '.scss', '.js', '.json'];
  // Typescript compiling configurations
  const tsBundleConfig = {
    target: 'node', //IMPORTANT TO PRESERVE PROCESS.ENV VARIABLES
    context: PATH.root,
    entry: {
      index: ['./src/index'],
    },
    output: {
      path: PATH.dist,
      filename: '[name].js',
      publicPath: '/',
      pathinfo: true,
    },
    mode: 'development',
    stats,
    devtool,
    watch: true,
    externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
    resolve: { extensions },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: PATH.src,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new StartServerPlugin('index.js'),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          BUILD_TARGET: JSON.stringify('server'),
        },
      }),
    ],
  };
  // Webpack configurations
  if (!env.production)
    tsBundleConfig.entry.index.unshift('webpack/hot/poll?1000');
  if (env.production) {
    delete tsBundleConfig.devtool;
    delete tsBundleConfig.output.pathinfo;
    tsBundleConfig.watch = false;
    tsBundleConfig.externals = [nodeExternals()];
    tsBundleConfig.output = {
      path: PATH.dist,
      filename: '[name].js',
      publicPath: '/',
    };
    tsBundleConfig.stats = 'normal';
    tsBundleConfig.plugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
    ]
  }
  const config = [tsBundleConfig];
  return config;
};
