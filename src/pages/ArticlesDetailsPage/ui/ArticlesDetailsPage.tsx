import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect'
import { AddCommentForm } from 'features/addCommentForm'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../model/slice/articleDetailsCommentsSlice'
import cls from './ArticlesDetailsPage.module.scss'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { fetchCommentByArticleId } from '../model/services/fetchCommentByArticleId/fetchCommentByArticleId'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'

interface ArticlesDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const isLoading = useSelector(getArticleCommentsIsLoading)

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
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} text={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)
