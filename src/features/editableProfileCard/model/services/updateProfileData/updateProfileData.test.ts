import axios from 'axios'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'

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
    id: '1',
}

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk()

        expect(mockedAxios.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: { ...data, lastname: '' } },
        })

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
})
