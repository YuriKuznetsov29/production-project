import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import React, { ReactNode } from 'react'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from '@/shared/lib/hook/useModal/useModal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props

    const { theme } = useTheme()

    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        // [cls[theme]]: true,
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    )
}
