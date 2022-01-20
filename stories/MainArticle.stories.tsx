import { MainArticle } from 'components/MainArticle'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'MainArticle',
  component: MainArticle
} as Meta

const Template: Story = ({ cover, created_at, title, text, slug, author }) => (
  <MainArticle
    cover={cover}
    created_at={created_at}
    title={title}
    text={text}
    slug={slug}
    author={author}
  />
)

export const Default = Template.bind({})
Default.args = {
  cover: {
    alternativeText: '',
    url: 'http://localhost:1337/uploads/cover_5074a4bf56.png'
  },
  created_at: '2022-01-06T22:46:37.087Z',
  title:
    'There once was a ship that put to sea the name of the ship was the Billy of Tea the winds blew up',
  text: '<p>Soon may the Wellerman come To bring us sugar and tea and rum One day, when the tonguing is done Well take our leave and go Shed not been two weeks from shore ...</p>',
  slug: 'micro-frontend',
  author: {
    name: 'Letícia Silva',
    photo: {
      url: 'https://avatars.githubusercontent.com/u/56488480?v=4',
      alternativeText: 'Letícia Alexandre'
    }
  }
}
