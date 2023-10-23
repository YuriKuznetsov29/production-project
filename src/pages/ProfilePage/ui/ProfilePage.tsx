import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    ProfileCard,
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    profileReducer,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import cls from './ProfilePage.module.scss'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducerList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation()
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard data={data} isLoading={isLoading} error={error} />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
