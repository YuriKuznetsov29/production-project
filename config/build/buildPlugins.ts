import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { WebpackPluginServe } from 'webpack-plugin-serve'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BuildOptions } from './types/config'

// плагины добавляют дополнительные возможности вебпаку
// например HtmlWebpackPlugin позволяет генерировать
// html файл в папку build, минимизируя его и сразу подключая
// js файл через тег script
export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ]

    if (isDev) {
        plugins.push(new WebpackPluginServe({}))
        plugins.push(new ReactRefreshWebpackPlugin({}))
    }

    return plugins
}
