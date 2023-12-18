import { classNames } from 'shared/lib/classNames/classNames'

import cls from './ArticleImageBlocksComponent.module.scss'

interface ArticleImageBlocksComponentProps {
    className?: string
}

export const ArticleImageBlocksComponent = ({ className }: ArticleImageBlocksComponentProps) => {
    return <div className={classNames(cls.ArticleImageBlocksComponent, {}, [className])}>123</div>
}
