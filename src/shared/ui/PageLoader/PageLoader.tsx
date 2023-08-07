import { classNames } from "shared/lib/classNames/classNames"
import cls from "./PageLoader.module.scss"
import { Loader } from "../Loader/Loader"

interface IPageLoaderProps {
    className?: string
}

export function PageLoader({ className }: IPageLoaderProps) {
    return (
        <div className={classNames(cls.loader, {}, [className])}>
            <Loader />
        </div>
    )
}
