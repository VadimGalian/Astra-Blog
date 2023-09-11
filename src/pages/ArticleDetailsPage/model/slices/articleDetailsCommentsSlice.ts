import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { IComment } from "entities/Comment"
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema"
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId"

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: comment => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCommentsByArticleId.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<IComment[]>) => {
                    state.isLoading = false
                    commentsAdapter.setAll(state, action.payload)
                }
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: articleDetailsCommentsReducer, actions: articleDetailsCommentsActions } =
    articleDetailsCommentsSlice
