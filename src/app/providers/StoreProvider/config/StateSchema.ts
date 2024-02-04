import {
    CombinedState,
    EnhancedStore,
    ReducersMapObject,
    AnyAction,
    Reducer,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import { UISchema } from 'features/UI/model/types/UISchema'
import { AddCommentFormSchema } from 'features/addCommentForm'
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage'
import { ArticleDetailsPageRecommendationsSchema } from 'pages/ArticlesDetailsPage/model/types/articleDetailsPageRecommendationsSlice'
import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    ui: UISchema
    // Асинхронные редюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    articleDetailsRecommendations?: ArticleDetailsPageRecommendationsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
