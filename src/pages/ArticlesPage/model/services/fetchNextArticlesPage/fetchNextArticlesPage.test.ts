import axios from 'axios'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                page: 2,
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(thunk.dispatch).toHaveBeenCalled()
    })

    test('not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ids: [],
                page: 2,
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        })

        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(thunk.dispatch).not.toHaveBeenCalled()
    })
})
