import { LoginFormProps } from "features/AuthByUsername/ui/LoginForm/LoginForm"
import { FC, lazy } from "react"

export const AboutPageAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise(resolve => {
            // @ts-ignore
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            setTimeout(() => resolve(import("./AboutPage")), 1500)
        })
)
