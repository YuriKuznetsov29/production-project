import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack/HStack/HStack'
import { updateProfileData } from 'features/editableProfileCard/model/services/updateProfileData/updateProfileData'
import { profileActions } from 'features/editableProfileCard/model/slice/profileSlice'
import { getProfileReadonly } from 'features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileData } from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props

    const userData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)

    const canEdit = userData?.id === profileData?.id

    const { t } = useTranslation('profile')

    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />

            {canEdit && (
                <>
                    {readonly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                {t('Отменить')}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    )
}
