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
import { Page } from 'shared/ui/Page/Page'
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../model/slices/articlePageSlice'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../model/selectors/articles.PageSelectors'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import cls from './ArticlesPage.module.scss'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
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

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage)
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage())
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
