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
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { fetchCommentByArticleId } from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import cls from './ArticlesDetailsPage.module.scss'
import { Page } from 'widgets/Page/Page'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticeDetailsPageHeader'
import { VStack } from 'shared/ui/Stack'
import { ArticleRecommendationsList } from 'features/articleRecommendationsList'

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
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id))
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
                <VStack max gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <Text size={TextSize.L} className={cls.commentTitle} text={t('Комментарии')} />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList comments={comments} isLoading={commentsIsLoading} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)
