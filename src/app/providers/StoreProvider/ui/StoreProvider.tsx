import { ReactNode } from "react"
import { DeepPartial } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateSchema } from "../config/StateSchema"

interface IStoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export function StoreProvider({ children, initialState }: IStoreProviderProps) {
    const store = createReduxStore(initialState as StateSchema)

    return <Provider store={store}>{children}</Provider>
}
