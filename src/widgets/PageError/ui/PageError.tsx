import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import cls from "./PageError.module.scss"

interface IPageErrorProps {
    className?: string
}

function reloadPage() {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
}

export function PageError({ className }: IPageErrorProps) {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.container, {}, [className])}>
            <p>{t("ошибка")}</p>
            <Button onClick={reloadPage}>{t("resetPage")}</Button>
        </div>
    )
}
