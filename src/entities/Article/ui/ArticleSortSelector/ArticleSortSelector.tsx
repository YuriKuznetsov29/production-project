import { classNames } from 'shared/lib/classNames/classNames'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { useCallback, useMemo } from 'react'
import { SortOrder } from 'shared/types'
import { ArticleSortField } from 'entities/Article/model/types/Article'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { onChangeOrder, onChangeSort, order, sort, className } = props

    const { t } = useTranslation()

    const orderOptions = useMemo<SelectOption[]>(
        () => [
            {
                value: 'asc',
                content: t('по возрастанию'),
            },
            {
                value: 'desc',
                content: t('по убыванию'),
            },
        ],
        []
    )

    const sortFieldOptions = useMemo<SelectOption[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('по возрастанию'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        []
    )

    const changeSortHandler = useCallback(
        (newSort: string) => {
            onChangeSort(newSort as ArticleSortField)
        },
        [onChangeSort]
    )

    const changeSortOrder = useCallback(
        (newOrder: string) => {
            onChangeOrder(newOrder as SortOrder)
        },
        [onChangeOrder]
    )

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOptions}
                label={t('по')}
                value={order}
                onChange={changeSortOrder}
                className={cls.order}
            />
        </div>
    )
}
