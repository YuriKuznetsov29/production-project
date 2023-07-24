import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

// лоадеры позволяют использовать файлы отличные от .js
// например использовать ts или импорты css прямо в js файл
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    // если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                    // включает css модули для файлов в пути которых содержится .module
                    // остальные  файлы можно импортировать и использовать  как обычно
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        // генерирует читаемые пути в дев режиме
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    // Порядок подключения лоадеров имеет значениет
    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}
