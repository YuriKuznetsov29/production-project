import { classNames } from 'shared/lib/classNames/classNames'
import { Card, CardTheme } from '../Card/Card'
import { ReactNode, memo, useCallback } from 'react'
import cls from './Tabs.module.scss'

export interface TabItem {
    content: ReactNode
    value: string
}

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const { onTabClick, tabs, value, className } = props

    const clickHandle = useCallback(
        (tab: TabItem) => {
            return () => {
                onTabClick(tab)
            }
        },
        [onTabClick]
    )

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
})
