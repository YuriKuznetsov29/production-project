import { getQueryParams } from './addQueryParams'

describe('shared/url/addQueryParams', function () {
    test('tes with one param', () => {
        const params = getQueryParams({ test: 'value' })

        expect(params).toBe('test=value')
    })

    test('tes with multiple params', () => {
        const params = getQueryParams({ test: 'value', second: '2' })

        expect(params).toBe('test=value&second=2')
    })

    test('tes with undefined', () => {
        const params = getQueryParams({ test: 'value', second: undefined })

        expect(params).toBe('test=value')
    })
})
