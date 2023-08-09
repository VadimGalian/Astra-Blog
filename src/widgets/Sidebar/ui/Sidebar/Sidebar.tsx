import { classNames } from "shared/lib/classNames/classNames"
import { useState } from "react"
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { useTranslation } from "react-i18next"
import AboutIcon from "shared/assets/icons/About.svg"
import HomeIcon from "shared/assets/icons/Home.svg"
import cls from "./Sidebar.module.scss"

interface ISidebarProps {
    className?: string
}

export function Sidebar({ className }: ISidebarProps) {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    function onToggle() {
        setCollapsed(prev => !prev)
    }
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.container, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={SizeButton.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>{t("mainPage")}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t("aboutPage")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    )
}
