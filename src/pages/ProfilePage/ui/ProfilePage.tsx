import {
    ProfileCard,
    ValidateProfileError,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from "entities/Profile"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { useTranslation } from "react-i18next"
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader"

const reducers: ReducersList = {
    profile: profileReducer,
}

function ProfilePage() {
    const { t } = useTranslation("prodile")
    const dispatch = useAppDispatch()
    const fromData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)
    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t("server"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("incorrectCountry"),
        [ValidateProfileError.NO_DATA]: t("noData"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t("incorrectUserData"),
        [ValidateProfileError.INCORRECT_AGE]: t("incorrectAge"),
    }

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || "" }))
        },
        [dispatch]
    )
    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }))
        },
        [dispatch]
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
        },
        [dispatch]
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }))
        },
        [dispatch]
    )

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }))
        },
        [dispatch]
    )

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }))
        },
        [dispatch]
    )

    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(profileActions.updateProfile({ currency }))
        },
        [dispatch]
    )

    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispatch(profileActions.updateProfile({ country }))
        },
        [dispatch]
    )

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfilePageHeader />
                {validateErrors?.length &&
                    validateErrors.map(err => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorsTranslate[err]}
                        />
                    ))}
                <ProfileCard
                    data={fromData}
                    error={error}
                    isLoading={isLoading}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
