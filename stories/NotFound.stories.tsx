import { Meta, Story } from '@storybook/react/types-6-0'
import { NotFound } from '../src/components/NotFound'

export default {
  title: 'NotFound',
  component: NotFound
} as Meta

const Template: Story = () => <NotFound />

export const Default = Template.bind({})
Default.args = {
  src: '/img/not-found.png'
}
