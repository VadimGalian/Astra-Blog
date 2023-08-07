import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./NotFoundPage.module.scss"

interface INotFoundPageProps {
    className?: string
}

export function NotFoundPage({ className }: INotFoundPageProps) {
    const { t } = useTranslation("notFound")
    return (
        <div className={classNames(cls.container, {}, [className])}>{t("страница не найдена")}</div>
    )
}
