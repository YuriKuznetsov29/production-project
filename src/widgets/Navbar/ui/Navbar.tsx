import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo, useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { isUserAdmin, isUserManager } from 'entities/User/model/selectors/roleSelectors'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()

    const [isAuthModal, setIsAuthModal] = useState(false)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text className={cls.appName} title={t('Ulbi TV App')} theme={TextTheme.INVERTED} />
                <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>
                    {' '}
                    {t('Создать статью')}{' '}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
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
            </header>
        )
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    )
})
