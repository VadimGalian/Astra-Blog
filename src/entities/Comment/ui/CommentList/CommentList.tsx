import { classNames } from "shared/lib/classNames/classNames"
import { Text } from "shared/ui/Text/Text"
import { IComment } from "../../model/types/comment"
import cls from "./CommentList.module.scss"
import { CommentCard } from "../CommentCard/CommentCard"

interface ICommentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export function CommentList(props: ICommentListProps) {
    const { className, comments, isLoading } = props

    return (
        <div className={classNames(cls.container, {}, [className])}>
            {comments?.length ? (
                comments.map(comment => (
                    <CommentCard isLoadimg={isLoading} className={cls.comment} comment={comment} />
                ))
            ) : (
                <Text text="No comments" />
            )}
        </div>
    )
}
