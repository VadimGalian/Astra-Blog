import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleList.module.scss"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"

interface IArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

export function ArticleList(props: IArticleListProps) {
    const { className, articles, isLoading, view = ArticleView.SMALL } = props

    function renderArticle(article: Article) {
        return (
            <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
        )
    }

    return (
        <div className={classNames(cls.container, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    )
}
