import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Navbar } from "./Navbar"

export default {
    title: "widget/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />

export const LightSidebar = Template.bind({})
LightSidebar.args = {}

export const DarkSidebar = Template.bind({})
DarkSidebar.args = {}
DarkSidebar.decorators = [ThemeDecorator(Theme.DARK)]
