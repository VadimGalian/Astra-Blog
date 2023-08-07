import { classNames } from "shared/lib/classNames/classNames"
import "./Loader.scss"

interface ILoaderProps {
    className?: string
}

export function Loader({ className }: ILoaderProps) {
    return (
        <div className={classNames("lds-ellipsis", {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
