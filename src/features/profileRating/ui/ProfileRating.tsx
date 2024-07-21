import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useGetProfileRating, useProfileRating } from '../api/profileRatingApi'

interface ProfileRatingProps {
    className?: string
    profileId: string
}

export const ProfileRating = (props: ProfileRatingProps) => {
    const { className, profileId } = props
    const { t } = useTranslation()
    const userData = useSelector(getUserAuthData)

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    })
    const [rateProfileMutation] = useProfileRating()

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: starsCount,
                    feedback,
                })
            } catch (e) {
                // handle error
                console.log(e)
            }
        },
        [profileId, rateProfileMutation, userData?.id]
    )

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateProfile(starsCount, feedback)
        },
        [handleRateProfile]
    )

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateProfile(starsCount)
        },
        [handleRateProfile]
    )

    if (isLoading) {
        return <Skeleton width="100%" height={120} />
    }

    const rating = data?.[0]
    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    )
}
