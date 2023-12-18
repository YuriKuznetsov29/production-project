import { classNames } from 'shared/lib/classNames/classNames'

import cls from './ArticleTextBlocksComponent.module.scss'

interface ArticleTextBlocksComponentProps {
    className?: string
}

export const ArticleTextBlocksComponent = ({ className }: ArticleTextBlocksComponentProps) => {
    return <div className={classNames(cls.ArticleTextBlocksComponent, {}, [className])}>123</div>
}
