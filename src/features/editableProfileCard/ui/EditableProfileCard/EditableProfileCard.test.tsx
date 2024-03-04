import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'
import { Profile } from 'entities/Profile'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { $api } from 'shared/api/api'

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin213',
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
}

describe('features/EditableProfileCard', () => {
    test('режим рид онли должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options)

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
    })

    test('при отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id="1" />, options)

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.click(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
    })

    test('должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options)

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Если нет ошибок валидации, то на сервер должен уйти put запрос', async () => {
        componentRender(<EditableProfileCard id="1" />, options)

        const mockPutReq = jest.spyOn($api, 'put')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
