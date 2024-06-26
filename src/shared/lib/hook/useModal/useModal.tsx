import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

interface UseModalProps {
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
    animationDelay: number
}

export function useModal(props: UseModalProps) {
    const { animationDelay, isOpen, lazy, onClose } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, animationDelay)
        }
    }, [onClose])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close()
            }
        },
        [close]
    )

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return {
        isClosing,
        isMounted,
        close,
    }
}
