import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './Flex.module.scss'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

export interface FlexProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
}

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    '16': cls.gap16,
    '32': cls.gap32,
}

export const Flex = (props: FlexProps) => {
    const {
        children,
        align = 'center',
        className,
        direction = 'row',
        justify = 'start',
        gap,
        max,
    } = props

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ]

    return <div className={classNames(cls.Flex, { [cls.max]: max }, classes)}>{children}</div>
}
