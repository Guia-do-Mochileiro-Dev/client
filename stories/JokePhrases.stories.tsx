import { JokePhrases } from 'components/JokePhrases'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'JokePhrases',
  component: JokePhrases
} as Meta

const Template: Story = ({ phrase, author, nextPhrase, previousPhrase }) => (
  <JokePhrases
    phrase={phrase}
    author={author}
    previousPhrase={previousPhrase}
    nextPhrase={nextPhrase}
  />
)

export const Default = Template.bind({})
Default.args = {
  phrase:
    'Se até as variáveis precisam ser declaradas porque não me declarar pra você?',
  author: 'Hebert Barros',
  nextPhrase: () => {},
  previousPhrase: () => {}
}
