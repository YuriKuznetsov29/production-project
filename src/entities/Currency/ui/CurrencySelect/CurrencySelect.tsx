import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { useTranslation } from 'react-i18next'
import { Currency } from 'entities/Currency/model/types/currency'
import { memo, useCallback } from 'react'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

// если вынести массив за пределы компонента он всегда будет одним и тем же и соответственно из за него не будет перерисовываться дочерний компонент
const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(
    ({ className, onChange, readonly, value }: CurrencySelectProps) => {
        const { t } = useTranslation()

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency)
            },
            [onChange]
        )
        return (
            <Select
                className={classNames('', {}, [className])}
                label={t('Укажите валюту')}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        )
    }
)
