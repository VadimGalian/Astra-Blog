import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import cls from "./Navbar.module.scss"

interface INavbarProps {
    className?: string
}

export function Navbar({ className }: INavbarProps) {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t("mainPage")}
                </AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t("aboutPage")}
                </AppLink>
            </div>
        </div>
    )
}
