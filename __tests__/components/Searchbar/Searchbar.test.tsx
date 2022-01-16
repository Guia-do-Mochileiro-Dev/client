import { render, screen } from '@testing-library/react'
import { Searchbar } from 'components/Searchbar'
import Theme from 'themes'

describe('<Searchbar />', () => {
  it('should render Searchbar', () => {
    const value = 'Front end'
    const handleChange = () => {}
    render(
      <Theme>
        <Searchbar value={value} handleChange={handleChange} />
      </Theme>
    )

    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
  })
})
