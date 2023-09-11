/* eslint-disable max-len */
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { ArticleDetails } from "entities/Article"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Text } from "shared/ui/Text/Text"
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { CommentList } from "entities/Comment"
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import cls from "./ArticleDetailsPage.module.scss"
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice"
import { getArticleCommentsIsLoading } from "../../model/selectors/comments"

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const { t } = useTranslation("article-details")
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t("Статья не найдена")}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title="Comments" className={cls.commentTitle} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
