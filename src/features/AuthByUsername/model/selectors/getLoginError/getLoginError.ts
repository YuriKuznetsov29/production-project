import { StateSchema } from '@/app/providers/StoreProvider'

export const getLoginError = (store: StateSchema) => store.loginForm?.error
