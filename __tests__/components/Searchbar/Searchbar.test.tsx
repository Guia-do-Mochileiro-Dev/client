import { render, screen } from '@testing-library/react'
import { Searchbar } from 'components/Searchbar'
import Theme from 'themes'

describe('<Searchbar />', () => {
  it('should render Searchbar', () => {
    render(
      <Theme>
        <Searchbar />
      </Theme>
    )

    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
  })
})
