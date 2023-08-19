import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "entities/Counter"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialeState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { counter: counterReducer },
        devTools: __IS_DEV__,
        preloadedState: initialeState,
    })
}
