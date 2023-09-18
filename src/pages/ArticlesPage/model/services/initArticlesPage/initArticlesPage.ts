import { createAsyncThunk } from "@reduxjs/toolkit"
import { ArticleSortField } from "entities/Article"
import { SortOrder } from "shared/types"
import { ThunkConfig } from "app/providers/StoreProvider"
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors"
import { articlesPageActions } from "../../slices/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    "articlesPage/initArticlesPage",
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi

        const inited = getArticlesPageInited(getState())

        if (!inited) {
            const orderFormUrl = searchParams.get("order") as SortOrder
            const sortFormUrl = searchParams.get("sort") as ArticleSortField
            const searchFormUrl = searchParams.get("search")

            if (orderFormUrl) {
                dispatch(articlesPageActions.setOrder(orderFormUrl))
            }

            if (sortFormUrl) {
                dispatch(articlesPageActions.setSort(sortFormUrl))
            }

            if (searchFormUrl) {
                dispatch(articlesPageActions.setSearch(searchFormUrl))
            }

            dispatch(articlesPageActions.initState())
            dispatch(fetchArticlesList({}))
        }
    }
)
