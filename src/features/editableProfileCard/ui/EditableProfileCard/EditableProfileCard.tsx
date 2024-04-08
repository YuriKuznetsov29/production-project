import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './EditableProfileCard.module.scss'
import { memo, useCallback } from 'react'

import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { Text, TextTheme } from '@/shared/ui/Text/Text'
import { useInitialEffect } from '@/shared/lib/hook/useInitialEffect/useInitialEffect'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { getProfileForm } from '@/features/editableProfileCard/model/selectors/getProfileForm/getProfileForm'
import { getProfileError } from '@/features/editableProfileCard/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '@/features/editableProfileCard/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '@/features/editableProfileCard/model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '@/features/editableProfileCard/model/services/fetchProfileData/fetchProfileData'
import {
    profileActions,
    profileReducer,
} from '@/features/editableProfileCard/model/slice/profileSlice'
import { ProfileCard } from '@/entities/Profile'
import { ValidateProfileError } from '@/features/editableProfileCard/model/consts/consts'
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader'
import { VStack } from '@/shared/ui/Stack'

interface EditableProfileCardProps {
    className?: string
    id?: string
}

const reducers: ReducerList = {
    profile: profileReducer,
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props
    const { t } = useTranslation()

    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)
    const dispatch = useAppDispatch()

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_AGE]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Данные не указаны'),
        [ValidateProfileError.SERVER_ERROR]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.NO_DATA]: t('Некорректный возраст'),
    }

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }))
        },
        [dispatch]
    )

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }))
        },
        [dispatch]
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }))
        },
        [dispatch]
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
        },
        [dispatch]
    )

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }))
        },
        [dispatch]
    )

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }))
        },
        [dispatch]
    )

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }))
        },
        [dispatch]
    )

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }))
        },
        [dispatch]
    )

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" max>
                <EditableProfileCardHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                            data-testid={'EditableProfileCard.Error'}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    )
})
