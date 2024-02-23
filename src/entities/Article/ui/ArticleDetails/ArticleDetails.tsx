import { classNames } from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { memo, useCallback, useEffect } from 'react'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { HStack, VStack } from 'shared/ui/Stack'
import { ArticleBlock, ArticleBlockType } from '../../model/types/Article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlocksComponent } from '../ArticleImageBlocksComponent/ArticleImageBlocksComponent'
import { ArticleTextBlocksComponent } from '../ArticleTextBlocksComponent/ArticleTextBlocksComponent'
import cls from './ArticleDetails.module.scss'

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

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlocksComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlocksComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )

            default:
                return null
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
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
        content = (
            <>
                <HStack justify="center" className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </HStack>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <VStack max gap="4">
                    <HStack gap="8" className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8" className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
