import { ComponentStory, ComponentMeta } from '@storybook/react'
import AvatarImg from '@/shared/assets/tests/storybook.jpg'
import { Avatar } from './Avatar'

export default {
    title: 'widget/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: AvatarImg,
    size: 150,
}

export const Secondary = Template.bind({})
Primary.args = {
    src: AvatarImg,
    size: 50,
}
