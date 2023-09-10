import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Country } from "entities/Country"
import { ProfileCard } from "./ProfileCard"

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = args => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        username: "admin",
        age: 22,
        country: Country.Ukraine,
        lastname: "Vasilich",
        first: "Bulkin",
        avatar: "",
    },
}

export const withError = Template.bind({})
withError.args = {}

export const Loading = Template.bind({})
Loading.args = {}
