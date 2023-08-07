import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./LangSwitcher.module.scss"
import { Button, ThemeButton } from "../Button/Button"

interface ILangSwitcherProps {
    className?: string
}

export function LangSwitcher({ className }: ILangSwitcherProps) {
    const { t, i18n } = useTranslation()

    function langToggle() {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button
            className={classNames(cls.container, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={langToggle}
        >
            {t("Язык")}
        </Button>
    )
}
