import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/addCommentForm'
import { getArticleCommentsIsLoading } from 'pages/ArticlesDetailsPage/model/selectors/comments'
import { addCommentForArticle } from 'pages/ArticlesDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentByArticleId } from 'pages/ArticlesDetailsPage/model/services/fetchCommentByArticleId/fetchCommentByArticleId'
import { getArticleComments } from 'pages/ArticlesDetailsPage/model/slice/articleDetailsCommentsSlice'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect'
import { VStack } from 'shared/ui/Stack'
import { Text, TextSize } from 'shared/ui/Text/Text'

interface ArticleDetailsCommentsProps {
    className?: string
    id: string
}

export const ArticleDetailsComments = ({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation('article-details')

    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const dispatch = useAppDispatch()

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch]
    )

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id))
    })

    return (
        <VStack gap="16">
            <Text size={TextSize.L} text={t('Комментарии')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </VStack>
    )
}
