import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { RatingCard } from '@/entities/Rating/ui/RatingCard'

const MainPage = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val)
    }
    return (
        <Page>
            {t('Главная страница')}
            <RatingCard feedbackTitle="123" hasFeedback />
        </Page>
    )
}

export default MainPage
