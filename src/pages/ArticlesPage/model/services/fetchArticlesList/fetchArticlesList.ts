import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { getArticlesPageLimit } from '../../selectors/articles.PageSelectors'

interface FetchArticlesListProps {
    page: number
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlePage/fetchArticlesList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const { page } = props
    const limit = getArticlesPageLimit(getState())

    try {
        const response = await extra.api.get(`/articles`, {
            params: { _expand: 'user', _page: page, _limit: limit },
        })

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (e) {
        console.log(e)
        return rejectWithValue('error')
    }
})
