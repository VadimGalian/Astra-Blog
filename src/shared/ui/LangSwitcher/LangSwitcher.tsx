import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ThemeButton } from "../Button/Button"

interface ILangSwitcherProps {
    className?: string
    short?: boolean
}

export function LangSwitcher({ className, short }: ILangSwitcherProps) {
    const { t, i18n } = useTranslation()

    async function langToggle() {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button
            className={classNames("", {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={langToggle}
        >
            {t(short ? "lang" : "language")}
        </Button>
    )
}
