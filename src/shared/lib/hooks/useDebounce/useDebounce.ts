import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * A hook that allows cancelling the previous function call until the delay expires
 * @param callback
 * @param delay
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}
