import { ButtonHTMLAttributes } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Button.module.scss"

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum SizeButton {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    square?: boolean
    size?: SizeButton
}

export function Button(props: IButtonProps) {
    const { className, children, theme, square, size = SizeButton.M, ...otherProps } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    }

    return (
        <button
            className={classNames(cls.btn, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
