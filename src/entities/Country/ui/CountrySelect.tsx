import { memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Select } from "shared/ui/Select/Select"
import { Country } from "../model/types/country"

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange]
    )

    return (
        <Select
            value={value}
            label="Choose your country"
            options={options}
            className={classNames("", {}, [className])}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
