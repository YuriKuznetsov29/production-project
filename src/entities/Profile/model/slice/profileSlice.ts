import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile'

export interface userState {
    value: number
}

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    data: undefined,
    error: '',
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
