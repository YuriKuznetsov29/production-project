import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './ArticleEditPage.module.scss'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page/Page'
import { useTranslation } from 'react-i18next'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<string>()
    const isEdit = Boolean(id)
    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('Редактирование статьи c ID =') : t('Создание новой статьи')}
        </Page>
    )
}

export default ArticleEditPage
