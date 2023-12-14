import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoader'

// лоадеры позволяют использовать файлы отличные от .js
// например использовать ts или импорты css прямо в js файл
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    }

    // если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = buildCssLoader(isDev)

    const babelLoader = buildBabelLoader(options)

    // Порядок подключения лоадеров имеет значениет
    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
