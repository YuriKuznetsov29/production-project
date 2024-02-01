import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article, ArticleType } from 'entities/Article'
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articles.PageSelectors'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlePage/fetchArticlesList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const limit = getArticlesPageLimit(getState())
    const page = getArticlesPageNum(getState())
    const order = getArticlesPageOrder(getState())
    const sort = getArticlesPageSort(getState())
    const search = getArticlesPageSearch(getState())
    const type = getArticlesPageType(getState())

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        })

        const response = await extra.api.get(`/articles`, {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _sort: sort,
                _order: order,
                type: type === ArticleType.ALL ? undefined : type,
                q: search,
            },
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
