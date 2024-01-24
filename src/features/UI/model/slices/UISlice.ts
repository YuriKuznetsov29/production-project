import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UISchema } from '../types/UISchema'

export interface loginState {
    value: number
}

const initialState: UISchema = {
    scroll: {},
}

export const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>
        ) => {
            state.scroll[payload.path] = payload.position
        },
    },
})

export const { actions: uiActions } = UISlice
export const { reducer: uiReducer } = UISlice
