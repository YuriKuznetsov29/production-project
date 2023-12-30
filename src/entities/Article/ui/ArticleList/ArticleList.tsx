import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import cls from './ArticleList.module.scss'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

export const ArticleList = (props: ArticleListProps) => {
    const { articles, className, isLoading, view = ArticleView.SMALL } = props

    const renderArticle = (article: Article) => {
        return <ArticleListItem article={article} view={view} className={cls.card} />
    }
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length ? articles.map(renderArticle) : null}
        </div>
    )
}
