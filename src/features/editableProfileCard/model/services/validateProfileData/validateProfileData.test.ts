import axios from 'axios'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../consts/consts'

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: NaN })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })

    test('incorrect all', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    })
})
