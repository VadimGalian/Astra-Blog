import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Text } from "shared/ui/Text/Text"
import { Card, CardTheme } from "shared/ui/Card/Card"
import cls from "./NotificationItem.module.scss"
import { Notification } from "../../model/types/notifications"

interface INotificationItemProps {
    className?: string
    item: Notification
}

export function NotificationItem(props: INotificationItemProps) {
    const { className, item } = props

    const content = (
        <Card theme={CardTheme.OUTLINED} className={classNames(cls.container, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    )

    if (item.href) {
        return (
            <AppLink className={cls.link} to={item.href}>
                {content}
            </AppLink>
        )
    }

    return content
}
