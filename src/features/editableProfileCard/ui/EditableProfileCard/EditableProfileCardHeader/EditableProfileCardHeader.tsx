import { classNames } from '@/shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { getProfileData } from '@/features/editableProfileCard/model/selectors/getProfileData/getProfileData'
import { useTranslation } from 'react-i18next'
import { getProfileReadonly } from '@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'
import { profileActions } from '@/features/editableProfileCard/model/slice/profileSlice'
import { updateProfileData } from '@/features/editableProfileCard/model/services/updateProfileData/updateProfileData'
import { HStack } from '@/shared/ui/Stack'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Text } from '@/shared/ui/Text/Text'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
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
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid={'EditableProfileCardHeader.EditButton'}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid={'EditableProfileCardHeader.CancelButton'}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid={'EditableProfileCardHeader.SaveButton'}
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    )
}
