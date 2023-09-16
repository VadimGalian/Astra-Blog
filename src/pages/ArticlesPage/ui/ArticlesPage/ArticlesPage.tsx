import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { ArticleList, ArticleView, ArticleViewSelector } from "entities/Article"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect"
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from "../../model/slice/articlesPageSlice"
import cls from "./ArticlesPage.module.scss"
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import { fetchArticlesList } from "../../model/service/fetchArticlesList"

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view))
        },
        [dispatch]
    )

    useInitialEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlesPageActions.initState())
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewCLick={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </div>
        </DynamicModuleLoader>
    )
})

export default memo(ArticlesPage)
