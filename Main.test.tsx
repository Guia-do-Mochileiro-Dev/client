import { render, screen } from '@testing-library/react'
import { Main } from '../../../src/components/Main'

describe('<Main />', () => {
  it('should render page', () => {
    const { container } = render(
      <Main
        title="Guia do Mochileiro Dev"
        description="Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D"
      />
    )

    expect(screen.getByText('Guia do Mochileiro Dev')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Main
        title="Guia do Mochileiro Dev"
        description="Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D"
      />
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': '#1f1635ff'
    })
  })
})
