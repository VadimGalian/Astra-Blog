import { ButtonHTMLAttributes } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Button.module.scss"

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export function Button(props: IButtonProps) {
    const { className, children, theme, ...otherProps } = props
    return (
        <button className={classNames(cls.btn, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}
