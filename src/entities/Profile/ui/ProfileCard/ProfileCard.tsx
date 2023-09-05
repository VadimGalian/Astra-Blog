import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text"
import { Mods, classNames } from "shared/lib/classNames/classNames"
import { Input } from "shared/ui/Input/Input"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Loader } from "shared/ui/Loader/Loader"
import { Select } from "shared/ui/Select/Select"
import { Currency, CurrencySelect } from "entities/Currency"
import { Country, CountrySelect } from "entities/Country"
import cls from "./ProfileCard.module.scss"
import { Profile } from "../../model/types/profile"

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export function ProfileCard(props: ProfileCardProps) {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
        readonly,
    } = props

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title="Somthing went wrong"
                    text="Try to reload page"
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder="Your name"
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder="Your lastname"
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder="Your age"
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder="Your city"
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder="Your username"
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder="Avatar url"
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    )
}
