import { Breadcrumb } from 'components/Breadcrumb'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as Meta

const Template: Story = ({ slug }) => <Breadcrumb slug={slug} />

export const Default = Template.bind({})
Default.args = {
  slug: 'There once was a ship that put to sea the name of the ship was the Billy of Tea the winds blew up'
}
