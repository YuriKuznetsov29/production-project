import { classNames } from 'shared/lib/classNames/classNames'
import { MutableRefObject, ReactNode, useRef, UIEvent } from 'react'
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll'
import cls from './Page.module.scss'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { getUIScrollByPath, uiActions } from 'features/UI'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hook/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hook/useThrottle/useThrottle'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname))

    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname })
        )
    }, 500)

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </section>
    )
}
