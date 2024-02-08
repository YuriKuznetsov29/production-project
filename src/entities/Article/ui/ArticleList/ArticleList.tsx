import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget } from 'react'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ))

export const ArticleList = (props: ArticleListProps) => {
    const { articles, className, isLoading, view = ArticleView.SMALL, target } = props

    const { t } = useTranslation()

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                isLoading={isLoading}
                className={cls.card}
                target={target}
            />
        )
    }

    if (!isLoading && !articles.length) {
        ;<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            <Text size={TextSize.L} title={t('Статьи не найдены')} />
        </div>
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    )
}
