var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var nodeModulesDir = path.resolve(__dirname, "./node_modules");
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["./index.ts"],
        vendor: [
            "angular/angular.js",
            "angular-ui-router/release/angular-ui-router.js",
            "angular-sanitize",
            "./custom.js"
        ],
    },
    context: __dirname + "",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        sourceMapFilename: "bundle.map",
    },
    module: {
        rules: [{
                test: /\.ts$/,
                exclude: [/node_modules/],
                // 
                use: ["ng-annotate-loader", "awesome-typescript-loader", 'angular2-template-loader'],
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: "tslint-loader",
                options: {},
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                    },
                }],
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'raw-loader',
                    options: {
                        esModule: false,
                    },
                }, ],
                exclude: /index.html$/,

            },
            {
                test: /\.less$/,
                use: [{
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader", // compiles Less to CSS
                    },
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        type: "application/font-woff",
                    },
                }, ],
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, "node_modules")
            }
        ],
    },
    plugins: [

        // new CopyWebpackPlugin({
        //     patterns: [{ from: "./index.html", to: "./index.html" }],
        // }),
        new HtmlWebpackPlugin({
            title: 'AngularJS - Webpack',
            template: 'index.html',
            inject: true
        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    configuration: require('./tslint.json'),
                    typeCheck: true
                }
            }
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js'],
            sourceRoot: "webpack:///"
        }),

    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            'node_modules': path.join(__dirname, 'node_modules'),
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9001,
    },
    //...
    optimization: {
        splitChunks: {
            chunks: "all",

        },

    },
};