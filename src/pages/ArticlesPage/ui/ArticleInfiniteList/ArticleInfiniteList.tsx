import { ArticleList } from 'entities/Article'
import { useSelector } from 'react-redux'
import { getArticles } from 'pages/ArticlesPage/model/slices/articlePageSlice'
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articles.PageSelectors'
import { useSearchParams } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect'
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { useTranslation } from 'react-i18next'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
    const [searchParams] = useSearchParams()

    const dispatch = useAppDispatch()
    const { t } = useTranslation('article-details')

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)

    if (error) {
        return <div>{t('Произошла ошибка при загрузке данных')}</div>
    }

    return (
        <ArticleList className={className} isLoading={isLoading} view={view} articles={articles} />
    )
}
