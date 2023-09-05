import { ChangeEvent, memo, useMemo } from "react"
import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    label?: string
    options?: SelectOption[]
    className?: string
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, value, onChange, readonly } = props

    function onChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
        onChange?.(e.target.value)
    }

    const optionList = useMemo(() => {
        options?.map(option => (
            <option className={cls.option} value={option.value} key={option.value}>
                {option.content}
            </option>
        ))
    }, [options])

    const mods: Mods = {}

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    )
})
