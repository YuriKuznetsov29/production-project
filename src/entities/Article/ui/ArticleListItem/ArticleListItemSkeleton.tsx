import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { ArticleView } from '@/entities/Article/model/consts/consts'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const { view, className } = props

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.card}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton width={200} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={16} />
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton className={cls.title} />
            </Card>
        </div>
    )
}
