import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Profile } from '@/entities/Profile'
import { ProfileSchema } from '../types/editableProfileCardSchema'

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
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
            state.validateErrors = undefined
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.data,
                ...action.payload,
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
