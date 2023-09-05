import { CSSProperties, useMemo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Avatar.module.scss"

interface AvatarProps {
    src?: string
    alt?: string
    size?: number
    className?: string
}

export const Avatar = (props: AvatarProps) => {
    const { src, className, alt, size } = props

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size]
    )

    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    )
}
