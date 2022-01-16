import { render, screen } from '@testing-library/react'
import { Header } from 'components/Header'
import Theme from 'themes'

describe('<Header />', () => {
  it('should render Header', () => {
    render(
      <Theme>
        <Header />
      </Theme>
    )

    expect(
      screen.getByRole('img', {
        name: /guia do mochileiro dev/i
      })
    ).toBeInTheDocument()
  })
})
