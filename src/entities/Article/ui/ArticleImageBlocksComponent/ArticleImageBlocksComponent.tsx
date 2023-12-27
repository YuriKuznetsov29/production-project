import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlocksComponent.module.scss'

interface ArticleImageBlocksComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlocksComponent = memo(
    ({ className, block }: ArticleImageBlocksComponentProps) => {
        return (
            <div className={classNames(cls.ArticleImageBlocksComponent, {}, [className])}>
                <img src={block.src} className={cls.img} alt={block.title} />
                {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
            </div>
        )
    }
)
