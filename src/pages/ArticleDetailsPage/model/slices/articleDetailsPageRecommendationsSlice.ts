import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Article } from "entities/Article"
import { StateSchema } from "app/providers/StoreProvider"
import { ArticleDetailsRecomendationsSchema } from "../types/ArticleDetailsRecomendationsSchema"
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations"

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: article => article.id,
})

export const getArticleRecomendations = recommendationsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationsSlice = createSlice({
    name: "articleDetailsPageRecommendations",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchArticleRecommendations.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const {
    reducer: articleDetailsPageRecommendationsReducer,
    actions: articleDetailsPageRecommendationsActions,
} = articleDetailsPageRecommendationsSlice
