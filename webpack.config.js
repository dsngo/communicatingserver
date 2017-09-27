const { join } = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require('fs');

// Initial configurations
const PATH = {
    dist: join(__dirname, "dist"),
    src: join(__dirname, "src"),
    root: join(__dirname, ""),
};

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const developmentPort = 4000;

function defineDevtool(num) {
    switch (num) {
        case 1:
            return "eval";
        case 2:
            return "cheap-module-eval-source-map";
        default:
            return "source-map";
    }
}

module.exports = (env = {}) => {
    const devtool = defineDevtool(env.prod ? 2 : 3);
    const stats = { colors: true, reasons: true, assets: true, errorDetails: true };
    const extensions = [".ts", ".tsx", ".css", ".scss", ".js", ".json"];
    const devSassLoader = ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
            {
                loader: "css-loader",
                options: { sourceMap: devtool === "source-map", importLoaders: 1 },
            },
            "sass-loader",
        ],
    });
    // Typescript compiling configurations
    const tsBundleConfig = {
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
        stats,
        devtool,
        devServer: {
            hot: true,
            open: true,
            inline: true,
            port: developmentPort,
            publicPath: "/",
            compress: true,
            historyApiFallback: { disableDotRule: true },
            contentBase: join(__dirname, "dist"),
            // https: true,
        },
        externals: nodeModules,
        resolve: { extensions },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: PATH.src,
                    use: [
                        {
                            loader: "awesome-typescript-loader",
                            options: {
                                transpileOnly: false, // enable/disable typechecking
                                sourceMap: devtool === "source-map",
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
        ],
    };
    // Webpack configurations
    if(!env.prod) {
        tsBundleConfig.entry.index.unshift(`webpack-dev-server/client?http://localhost:${developmentPort}/`);
    }
    if (env.prod) {
        delete tsBundleConfig.devtool;
        delete tsBundleConfig.devServer;
        delete tsBundleConfig.output.pathinfo;
        tsBundleConfig.watch = false;
        tsBundleConfig.output = {
            path: PATH.dist,
            filename: "[name].js",
            publicPath: "/",
        };
        tsBundleConfig.stats = "normal";
        tsBundleConfig.plugins = [
            new webpack.DefinePlugin({ "process.env": { NODE_ENV: '"production"' } }),
            new webpack.optimize.UglifyJsPlugin({ comments: false }),
        ];
    }
    const config = [tsBundleConfig];
    return config;
};
