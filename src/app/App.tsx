import { Suspense } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import "./styles/index.scss"
import { AppRouter } from "./providers/route"

export default function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
