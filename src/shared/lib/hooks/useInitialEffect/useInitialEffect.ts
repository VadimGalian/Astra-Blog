import { useEffect } from "react"
import { useAppDispatch } from "../useAppDispatch/useAppDispatch"

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            callback()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
