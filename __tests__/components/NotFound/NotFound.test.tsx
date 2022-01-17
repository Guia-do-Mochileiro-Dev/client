import { render, screen } from '@testing-library/react'
import { NotFound } from '../../../src/components/NotFound'

describe('<NotFound />', () => {
  it('should render NotFound', () => {
    render(<NotFound />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
