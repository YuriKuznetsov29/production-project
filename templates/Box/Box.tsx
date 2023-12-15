import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Box.module.scss'

interface BoxProps {
    className?: string
}

export const Box = ({ className }: BoxProps) => {
    return <div className={classNames(cls.Box, {}, [className])}></div>
}
