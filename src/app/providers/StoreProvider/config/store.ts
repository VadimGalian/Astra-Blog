import { $api } from "shared/api/api"
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { To } from "history"
import { NavigateOptions } from "@storybook/router"
import { counterReducer } from "entities/Counter"
import { userReducer } from "entities/User"
import { StateSchema } from "./StateSchema"
import { createReducerManager } from "./reducerManager"

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDafaultMiddleware =>
            getDafaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
