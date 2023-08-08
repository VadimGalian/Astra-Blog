import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { PageError } from "./PageError"

export default {
    title: "widget/PageError",
    component: PageError,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = args => <PageError {...args} />

export const light = Template.bind({})
light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
