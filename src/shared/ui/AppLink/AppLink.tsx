import { classNames } from "shared/lib/classNames/classNames"
import { Link, LinkProps } from "react-router-dom"
import cls from "./AppLink.module.scss"

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface IAppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export function AppLink(props: IAppLinkProps) {
    const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
    return (
        <Link to={to} className={classNames(cls.link, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    )
}
