import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect'
import { AddCommentForm } from 'features/addCommentForm'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../model/slice/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { fetchCommentByArticleId } from '../model/services/fetchCommentByArticleId/fetchCommentByArticleId'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'
import cls from './ArticlesDetailsPage.module.scss'
import { Page } from 'widgets/Page/Page'
import {
    articleDetailsPageRecommendationsReducer,
    getArticleRecommendations,
} from '../model/slice/articleDetailsPageRecommendationsSlice'
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations'
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../model/slice'

interface ArticlesDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesDetailsPage: articleDetailsPageReducer,
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id))
        dispatch(fetchArticleRecommendations())
    })

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch]
    )

    if (!id) {
        return (
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text size={TextSize.L} className={cls.commentTitle} text={t('Рекомендуем')} />
                <ArticleList
                    className={cls.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target="_blank"
                />
                <Text size={TextSize.L} className={cls.commentTitle} text={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)
