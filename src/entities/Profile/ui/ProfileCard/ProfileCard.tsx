import { Text } from "shared/ui/Text/Text"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import {
    getProfileData,
    getProfileError,
    getProfileIsLoading,
} from "entities/Profile/model/selectors/profileSelectors"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Input } from "shared/ui/Input/Input"
import cls from "./ProfileCard.module.scss"

interface ProfileCardProps {
    className?: string
}

export function ProfileCard({ className }: ProfileCardProps) {
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title="Profile" />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    Edit
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder="Your name" className={cls.input} />
                <Input value={data?.lastname} placeholder="Your lastname" className={cls.input} />
            </div>
        </div>
    )
}
