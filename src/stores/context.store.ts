import { createContext } from 'react'
import { RootStore } from './root.store'

export const appStoreContext = createContext(new RootStore())
