import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher"

interface ISidebarProps {
    className?: string
}

export function Sidebar({ className }: ISidebarProps) {
    const [collapsed, setCollapsed] = useState(false)

    function onToggle() {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.container, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
