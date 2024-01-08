import axios from 'axios'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

const data = {
    username: 'admin',
    age: 29,
    country: Country.Russia,
    lastname: '123',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
}

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, { articlesPage: {} })
    })
})
