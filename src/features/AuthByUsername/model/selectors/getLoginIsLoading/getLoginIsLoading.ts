import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginIsLoading = (store: StateSchema) => store.loginForm?.isLoading
