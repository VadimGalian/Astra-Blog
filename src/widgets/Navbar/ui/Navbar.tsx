import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import cls from "./Navbar.module.scss"

interface INavbarProps {
    className?: string
}

export function Navbar({ className }: INavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}
