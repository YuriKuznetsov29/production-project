import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
})

describe('width additional classes', () => {
    test('test', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2')
    })
})

describe('width additional classes', () => {
    const expected = 'someClass class1 class2'
    test('test', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })
})

describe('width mods', () => {
    const expected = 'someClass class1 scrollable'
    test('test', () => {
        expect(classNames('someClass', { scrollable: true }, ['class1'])).toBe(expected)
    })
})

describe('width mods false', () => {
    const expected = 'someClass class1'
    test('test', () => {
        expect(classNames('someClass', { scrollable: false }, ['class1'])).toBe(expected)
    })
})

describe('width mods undefined', () => {
    const expected = 'someClass class1'
    test('test', () => {
        expect(classNames('someClass', { scrollable: undefined }, ['class1'])).toBe(expected)
    })
})
