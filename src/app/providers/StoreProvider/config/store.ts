import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { NavigateOptions, To } from 'react-router-dom'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { createReducerManager } from './reducerMeneger'
import { uiReducer } from 'features/UI'

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: uiReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
