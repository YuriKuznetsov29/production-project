import { classNames } from '@/shared/lib/classNames/classNames'
import { HTMLAttributes, ReactNode } from 'react'
import cls from './Card.module.scss'

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
    max?: boolean
}

export const Card = ({
    className,
    max,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
}: CardProps) => {
    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    )
}
