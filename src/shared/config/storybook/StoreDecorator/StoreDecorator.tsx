/* eslint-disable indent */
import { ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsPageReducer } from 'pages/ArticlesDetailsPage/model/slice'
import { articleDetailsCommentsReducer } from 'pages/ArticlesDetailsPage/model/slice/articleDetailsCommentsSlice'
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    (StoryComponent: Story) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    )
