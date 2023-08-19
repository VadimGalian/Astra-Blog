/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-one-expression-per-line */
import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { counterActions } from "../model/slice/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"

export function Counter() {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    function increment() {
        dispatch(counterActions.increment())
    }

    function decrement() {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-button" onClick={increment}>
                increment
            </Button>
            <Button data-testid="decrement-button" onClick={decrement}>
                decrement
            </Button>
        </div>
    )
}
