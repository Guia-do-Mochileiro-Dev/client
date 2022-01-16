import { render, screen } from '@testing-library/react'
import { Footer } from 'components/Footer'

describe('<Footer />', () => {
  it('should render Footer', () => {
    render(<Footer />)

    expect(screen.getByText('Quem Somos')).toBeInTheDocument()
  })
})
