import NotificationIcon from 'shared/assets/icons/about-20-20.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import cls from './NotificationButton.module.scss'
import { Popover } from 'shared/ui/Popups'
import { classNames } from 'shared/lib/classNames/classNames'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={
                <Button className={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    )
}
