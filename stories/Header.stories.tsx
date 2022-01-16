import { Header } from 'components/Header'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Header',
  component: Header
} as Meta

const Template: Story = () => <Header />

export const Default = Template.bind({})
Default.args = {}
