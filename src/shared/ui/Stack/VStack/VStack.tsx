import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './VStack.module.scss'
import { Flex, FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props

    return <Flex align={align} direction="column" {...props} />
}
