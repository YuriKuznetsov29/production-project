import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from 'features/addCommentForm/model/selectors/addCommentFormSelectors'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

interface AddCommentFormProps {
    className?: string
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
}

export const AddCommentForm = ({ className }: AddCommentFormProps) => {
    const { t } = useTranslation()

    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)

    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value))
        },
        [dispatch]
    )

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button theme={ButtonTheme.OUTLINE}>{t('Отправить')}</Button>
            </div>
        </DynamicModuleLoader>
    )
}
