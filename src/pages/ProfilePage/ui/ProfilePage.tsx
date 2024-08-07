import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import { Page } from '@/widgets/Page/Page'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/Text/Text'
import { ProfileRating } from '@/features/profileRating'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation('profile')

    if (!id) {
        return <Text text={t('Профиль не найден')} />
    }

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
