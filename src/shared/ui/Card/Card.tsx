import { HTMLAttributes, ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Card.module.scss"

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    className?: string
}

export function Card(props: ICardProps) {
    const { className, children, ...otherProps } = props

    return (
        <div className={classNames(cls.container, {}, [className])} {...otherProps}>
            {children}
        </div>
    )
}
