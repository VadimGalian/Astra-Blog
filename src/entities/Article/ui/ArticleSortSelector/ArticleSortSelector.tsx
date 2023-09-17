import { memo, useMemo } from "react"
import { ArticleSortField } from "entities/Article"
import { Select, SelectOption } from "shared/ui/Select/Select"
import { SortOrder } from "shared/types"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleSortSelector.module.scss"

interface IArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            { value: "asc", content: "Ascending" },
            { value: "desc", content: "Descending" },
        ],
        []
    )

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            { value: ArticleSortField.CREATED, content: "Creating date" },
            { value: ArticleSortField.TITLE, content: "Title" },
            { value: ArticleSortField.VIEWS, content: "Views" },
        ],
        []
    )

    return (
        <div className={classNames(cls.container, {}, [className])}>
            <Select
                value={sort}
                options={sortFieldOptions}
                label="Sort by"
                onChange={onChangeSort}
            />
            <Select
                className={cls.order}
                value={order}
                options={orderOptions}
                label="By"
                onChange={onChangeOrder}
            />
        </div>
    )
})
