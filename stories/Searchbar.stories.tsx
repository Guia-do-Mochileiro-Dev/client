import { Searchbar } from 'components/Searchbar'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Searchbar',
  component: Searchbar
} as Meta

const Template: Story = ({ value, handleChange }) => (
  <Searchbar value={value} handleChange={handleChange} />
)

export const Default = Template.bind({})
Default.args = {
  value: 'Guia do Mochileiro Dev',
  handleChange = () => {}
}
