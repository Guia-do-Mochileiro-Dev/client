import { Author } from 'components/Author'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Author',
  component: Author
} as Meta

const Template: Story = ({ photo, name }) => (
  <Author photo={photo} name={name} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'Letícia Alexandre',
  photo: {
    url: 'https://avatars.githubusercontent.com/u/56488480?v=4',
    alternativeText: 'Letícia Alexandre'
  }
}
