import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleViewSelector.module.scss"
import { ArticleView } from "../../model/types/article"

interface IArticleViewSelectorProps {
    className?: string
    view?: ArticleView
    onViewCLick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: "",
    },
    {
        view: ArticleView.BIG,
        icon: "",
    },
]

export function ArticleViewSelector(props: IArticleViewSelectorProps) {
    const { className, view, onViewCLick } = props

    const onClick = (newView: ArticleView) => () => {
        onViewCLick?.(newView)
    }

    return (
        <div className={classNames(cls.container, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    className={classNames("", { [cls.notSelected]: viewType.view !== view })}
                >
                    asd
                </Button>
            ))}
        </div>
    )
}
