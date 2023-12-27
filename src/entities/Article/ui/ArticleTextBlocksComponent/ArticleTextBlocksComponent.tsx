import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlocksComponent.module.scss'

interface ArticleTextBlocksComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlocksComponent = memo(
    ({ className, block }: ArticleTextBlocksComponentProps) => {
        return (
            <div className={classNames(cls.ArticleTextBlocksComponent, {}, [className])}>
                {block.title && <Text className={cls.title} title={block.title} />}
                {block.paragraphs.map((paragraph) => (
                    <Text key={paragraph} text={paragraph} className={cls.paragraph} />
                ))}
            </div>
        )
    }
)
