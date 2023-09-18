import { memo } from "react"
import { useParams } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { Page } from "widgets/Page/Page"
import cls from "./ArticleEditPage.module.scss"

interface IArticleEditPageProps {
    className?: string
}

function ArticleEditPage(props: IArticleEditPageProps) {
    const { className } = props
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.container, {}, [className])}>
            {isEdit ? "Edit" : "Create"}
        </Page>
    )
}

export default memo(ArticleEditPage)
