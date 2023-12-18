import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { memo, useEffect } from 'react'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={200} height={32} />
                <Skeleton className={cls.skeleton} width={200} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </div>
        )
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} text={t('Произошла ошибка при загрузке статьи.')} />
        )
    } else {
        content = <div>Article Details</div>
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
        </DynamicModuleLoader>
    )
})
