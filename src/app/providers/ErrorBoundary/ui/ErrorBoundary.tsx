import React, { ErrorInfo, ReactNode, Suspense } from "react"
import { PageError } from "widgets/PageError/ui/PageError"

interface IErrorBoundaryProps {
    children: ReactNode
}

interface IErrorBoundaryState {
    hasError: boolean
}

export default class ErrorBoundary extends React.Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                // eslint-disable-next-line i18next/no-literal-string
                <Suspense fallback={<div>Loading...</div>}>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}
