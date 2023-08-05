import { useState } from "react"
import classes from "./Counter.module.scss"

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 className={classes.btn}>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>click</button>
        </div>
    )
}
