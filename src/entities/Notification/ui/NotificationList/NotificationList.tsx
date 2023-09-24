import { classNames } from "shared/lib/classNames/classNames"
import { useNotifications } from "entities/Notification/api/notificationApi"
import { VStack } from "shared/ui/Stack"
import cls from "./NotificationList.module.scss"
import { NotificationItem } from "../NotificationItem/NotificationItem"

interface INotificationListProps {
    className?: string
}

export function NotificationList(props: INotificationListProps) {
    const { className } = props
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    })

    return (
        <VStack gap="16" max className={classNames(cls.container, {}, [className])}>
            {data?.map(item => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    )
}
