import { Text } from "shared/ui/Text/Text"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile"
import { useCallback } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import cls from "./ProfilePageHeader.module.scss"

interface ProfilePageHeaderProps {}

export function ProfilePageHeader(props: ProfilePageHeaderProps) {
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <Text title="Profile" />
            {readonly ? (
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                    Edit
                </Button>
            ) : (
                <>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        className={cls.editBtn}
                        onClick={onCancelEdit}
                    >
                        Cancel
                    </Button>
                    <Button theme={ButtonTheme.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                        Save
                    </Button>
                </>
            )}
        </div>
    )
}
