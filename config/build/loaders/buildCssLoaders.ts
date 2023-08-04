import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev: boolean) {
    return {
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
    }
}
