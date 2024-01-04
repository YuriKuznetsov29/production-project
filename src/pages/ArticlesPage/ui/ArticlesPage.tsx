import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { Article, ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../model/slices/articlePageSlice'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import cls from './ArticlesPage.module.scss'
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors/articles.PageSelectors'

interface ArticlesPageProps {
    className?: string
}

const resucers: ReducerList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch()

    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view))
        },
        [dispatch]
    )

    useInitialEffect(() => {
        dispatch(fetchArticlesList)
        dispatch(articlesPageActions.initState)
    })

    return (
        <DynamicModuleLoader reducers={resucers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
