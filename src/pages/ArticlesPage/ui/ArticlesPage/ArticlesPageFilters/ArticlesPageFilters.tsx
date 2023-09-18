import { useSelector } from "react-redux"
import { memo, useCallback, useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Card } from "shared/ui/Card/Card"
import { Input } from "shared/ui/Input/Input"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { SortOrder } from "shared/types"
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs"
import { ArticleType } from "entities/Article/model/types/article"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import {
    ArticleView,
    ArticleViewSelector,
    ArticleSortSelector,
    ArticleSortField,
} from "entities/Article"
import { articlesPageActions } from "../../../model/slices/articlesPageSlice"
import cls from "./ArticlesPageFilters.module.scss"
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from "../../../model/selectors/articlesPageSelectors"
import { fetchArticlesList } from "../../../model/services/fetchArticlesList/fetchArticlesList"

interface IArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo((props: IArticlesPageFiltersProps) => {
    const { className } = props
    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const dispatch = useAppDispatch()

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view))
        },
        [dispatch]
    )

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort))
            dispatch(articlesPageActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData]
    )

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder))
            dispatch(articlesPageActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData]
    )

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search))
            dispatch(articlesPageActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData]
    )

    const onChangeType = useCallback(
        (tab: TabItem) => {
            dispatch(articlesPageActions.setType(tab.value as ArticleType))
            dispatch(articlesPageActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData]
    )

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.IT,
                content: "IT",
            },
            {
                value: ArticleType.ALL,
                content: "all",
            },
            {
                value: ArticleType.ECONOMICS,
                content: "Economics",
            },
            {
                value: ArticleType.SCIENCE,
                content: "Science",
            },
        ],
        []
    )

    return (
        <div className={classNames(cls.container, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} placeholder="Search" />
            </Card>
            <Tabs tabs={typeTabs} onTabClick={onChangeType} value={type} className={cls.tabs} />
        </div>
    )
})
