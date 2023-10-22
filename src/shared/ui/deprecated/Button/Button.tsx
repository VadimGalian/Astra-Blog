import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Button theme. Responsible for the visuals (within a frame, without styles, a color opposite to the app theme, etc.).
     */
    theme?: ButtonTheme;
    /**
     * A flag that makes the button square.
     */
    square?: boolean;
    /**
     * Button size in accordance with the design system.
     */
    size?: ButtonSize;
    /**
     * A flag responsible for the button's operation.
     */
    disabled?: boolean;
    /**
     * Button content.
     */
    children?: ReactNode;
    /**
     * Expands the button to the full available width.
     */
    fullWidth?: boolean;
}

/**
 * Deprecated, use new components from the 'redesigned' folder.
 * @deprecated
 */
export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        fullWidth,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
