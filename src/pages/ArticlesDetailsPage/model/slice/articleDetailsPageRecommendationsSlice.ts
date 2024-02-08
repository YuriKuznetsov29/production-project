import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'
import { ArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSlice'
import { Article } from 'entities/Article'

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articlesDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false
                    recommendationsAdapter.setAll(state, action.payload)
                }
            )
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: articleDetailsPageRecommendationsReducer } =
    articleDetailsPageRecommendationsSlice
