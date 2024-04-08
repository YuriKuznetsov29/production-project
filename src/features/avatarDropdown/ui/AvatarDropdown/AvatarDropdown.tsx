import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './avatarDropdown.module.scss'
import { Dropdown } from '@/shared/ui/Popups'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { useTranslation } from 'react-i18next'

interface avatarDropdownProps {
    className?: string
}

export const AvatarDropdown = ({ className }: avatarDropdownProps) => {
    const { t } = useTranslation()

    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const authData = useSelector(getUserAuthData)

    const dispatch = useDispatch()

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if (!authData) {
        return null
    }
    return (
        <Dropdown
            className={classNames(cls.avatarDropdown, {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Админка'),
                              onClick: onLogout,
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
                {
                    content: t('Профиль'),
                    onClick: onLogout,
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
            direction="bottom left"
        />
    )
}
