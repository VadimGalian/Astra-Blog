import { classNames } from "shared/lib/classNames/classNames"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { useTranslation } from "react-i18next"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { getUserAuthData } from "entities/User"
import { getArticleDetailsData } from "entities/Article"
import cls from "./ArticleDetailsPageHeader.module.scss"
import { getCanEditArticle } from "../../../model/selectors/article"

interface IArticleDetailsPageHeaderProps {
    className?: string
}

export function ArticleDetailsPageHeader(props: IArticleDetailsPageHeaderProps) {
    const { className } = props
    const { t } = useTranslation("article-details")
    const navigate = useNavigate()
    const userData = useSelector(getUserAuthData)
    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}/${article?.id}/edit`)
    }, [navigate, article])

    return (
        <div className={classNames(cls.container, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t("Назад к списку")}
            </Button>
            {canEdit && (
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t("Редактировать")}
                </Button>
            )}
        </div>
    )
}
