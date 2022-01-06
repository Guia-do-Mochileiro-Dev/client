import { Main } from '../src/components/Main'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main
} as Meta

const Template: Story = ({ title, description }) => (
  <Main title={title} description={description} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Guia do Mochileiro Dev',
  description:
    'Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D'
}
