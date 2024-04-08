import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import cls from './ArticleRecommendationsList.module.scss'
import { ArticleList } from '@/entities/Article'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { VStack } from '@/shared/ui/Stack'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const { data: articles, isLoading, isError } = useArticleRecommendationsList(3)

    if (isError || isLoading || !articles) {
        return null
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text size={TextSize.L} text={t('Рекомендуем')} />
            <ArticleList articles={articles} target="_blank" />
        </VStack>
    )
})
