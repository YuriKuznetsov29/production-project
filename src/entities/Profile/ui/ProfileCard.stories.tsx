import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import avatar from '@/shared/assets/tests/storybook.jpg'
import { ProfileCard } from './ProfileCard'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

const primaryArgs = {
    data: {
        username: 'admin',
        age: 29,
        country: Country.Russia,
        lastname: '123',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar,
    },
}

export const Primary = Template.bind({})
Primary.args = primaryArgs

export const PrimaryRedesigned = Template.bind({})
PrimaryRedesigned.args = primaryArgs
// PrimaryRedesigned.decorators = [NewDesignDecorator]

export const withError = Template.bind({})
withError.args = {
    error: 'true',
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}
