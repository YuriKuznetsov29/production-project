import { memo, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const sidebarItemsList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem item={item} collapsed={collapsed} key={item.path} />
            )),
        [collapsed, sidebarItemsList]
    )

    return (
        <menu
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>{itemsList}</div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </menu>
    )
})
