import { classNames } from "shared/lib/classNames/classNames"
import { Popover } from "shared/ui/Popups"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { NotificationList } from "entities/Notification"
import cls from "./NotificationButton.module.scss"

interface INotificationButtonProps {
    className?: string
}

export function NotificationButton(props: INotificationButtonProps) {
    const { className } = props

    return (
        <Popover
            className={classNames(cls.container, {}, [className])}
            direction="bottom left"
            trigger={<Button theme={ButtonTheme.CLEAR}>someIcon</Button>}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    )
}
