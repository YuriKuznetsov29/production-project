import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { memo, useEffect } from 'react'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>123</div>
        </DynamicModuleLoader>
    )
})
