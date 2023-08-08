import { classNames } from "shared/lib/classNames/classNames"
import { useState } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"
import { useTranslation } from "react-i18next"
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
        <div className={classNames(cls.container, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>{t("sidebarToggle")}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
