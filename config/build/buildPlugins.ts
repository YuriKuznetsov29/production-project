import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// плагины добавляют дополнительные возможности вебпаку
// например HtmlWebpackPlugin позволяет генерировать 
// html файл в папку build, минимизируя его и сразу подключая
// js файл через тег script
export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}
