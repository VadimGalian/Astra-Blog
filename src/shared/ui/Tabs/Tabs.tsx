import { ReactNode, memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Tabs.module.scss"
import { Card, CardTheme } from "../Card/Card"

export interface TabItem {
    value: string
    content: ReactNode
}

interface ITabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: ITabsProps) => {
    const { className, tabs, value, onTabClick } = props

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab)
        },
        [onTabClick]
    )

    return (
        <div className={classNames(cls.container, {}, [className])}>
            {tabs.map((tab, index) => (
                <Card
                    onClick={clickHandle(tab)}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    className={cls.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
})
