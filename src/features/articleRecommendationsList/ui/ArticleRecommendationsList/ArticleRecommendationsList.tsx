import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import cls from './ArticleRecommendationsList.module.scss'
import { ArticleList } from 'entities/Article'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'
import { rtkApi } from 'shared/api/rtkApi'

interface ArticleRecommendationsListProps {
    className?: string
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit || 4,
                },
            }),
        }),
    }),
    overrideExisting: false,
})

const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { data: articles, isLoading, isError } = useArticleRecommendationsList(3)

    if (isError || isLoading) {
        return null
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text size={TextSize.L} text={t('Рекомендуем')} />
            <ArticleList articles={articles} target="_blank" />
        </VStack>
    )
})
