import { Footer } from 'components/Footer'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Footer',
  component: Footer
} as Meta

const Template: Story = () => <Footer />

export const Default = Template.bind({})
Default.args = {}
