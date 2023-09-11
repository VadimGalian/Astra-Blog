import { classNames } from "shared/lib/classNames/classNames"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Text } from "shared/ui/Text/Text"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { IComment } from "../../model/types/comment"
import cls from "./CommentCard.module.scss"

interface ICommentCardProps {
    className?: string
    comment: IComment
    isLoadimg?: boolean
}

export function CommentCard(props: ICommentCardProps) {
    const { className, comment, isLoadimg } = props

    if (isLoadimg) {
        return (
            <div className={classNames(cls.container, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width={50} height="100%" />
            </div>
        )
    }

    return (
        <div className={classNames(cls.container, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cls.username} title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    )
}
