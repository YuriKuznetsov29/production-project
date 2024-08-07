import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import { AppLink } from '../../../AppLink/AppLink'
import { mapDirectionClass } from '../styles/consts'
import cls from './Dropdown.module.scss'
import popupCls from '../styles/popup.module.scss'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
}

export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom right' } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={cls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, i) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            className={classNames(cls.item, { [popupCls.active]: active })}
                            onClick={item.onClick}
                            type="button"
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item key={i} as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item key={i} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
