import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Article, ArticleType } from 'entities/Article'
import { ArticleBlockType } from 'entities/Article/model/consts/consts'
import ArticlesDetailsPage from './ArticlesDetailsPage'

export default {
    title: 'pages/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesDetailsPage>

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => (
    <ArticlesDetailsPage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
