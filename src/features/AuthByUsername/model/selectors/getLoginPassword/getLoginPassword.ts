import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginPassword = (store: StateSchema) => store?.loginForm?.password || ''
