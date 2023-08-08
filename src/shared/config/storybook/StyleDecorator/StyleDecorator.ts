import { Story } from "@storybook/react"
import "app/styles/index.scss"

export function StyleDecorator(story: () => Story) {
    return story()
}
