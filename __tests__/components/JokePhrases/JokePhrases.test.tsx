import { render, screen } from '@testing-library/react'
import { JokePhrases } from 'components/JokePhrases'
import Theme from 'themes'

describe('<JokePhrases />', () => {
  it('should render JokePhrases', () => {
    const data = {
      phrase:
        'Se até as variáveis precisam ser declaradas porque não me declarar pra você?',
      author: 'Hebert Barros',
      nextPhrase: () => {},
      previousPhrase: () => {}
    }

    render(
      <Theme>
        <JokePhrases
          phrase={data.phrase}
          author={data.author}
          previousPhrase={data.previousPhrase}
          nextPhrase={data.nextPhrase}
        />
      </Theme>
    )

    expect(screen.getByText(data.phrase)).toBeInTheDocument()
  })
})
