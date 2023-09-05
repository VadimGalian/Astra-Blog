import { memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Select } from "shared/ui/Select/Select"
import { Currency } from "../model/types/currency"

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency)
        },
        [onChange]
    )

    return (
        <Select
            value={value}
            label="Choose your currency"
            options={options}
            className={classNames("", {}, [className])}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
