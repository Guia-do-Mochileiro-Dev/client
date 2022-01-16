import { render, screen } from '@testing-library/react'
import Theme from 'themes'
import { Footer } from '../../../src/components/Footer'

describe('<Footer />', () => {
  it('should render Footer', () => {
    render(
      <Theme>
        <Footer />
      </Theme>
    )

    expect(screen.getByText('Quem Somos')).toBeInTheDocument()
  })
})
