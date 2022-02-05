import { render, screen } from '@testing-library/react'
import { Breadcrumb } from 'components/Breadcrumb'
import Theme from 'themes'

describe('<Breadcrumb />', () => {
  it('should render Breadcrumb', () => {
    const title =
      'There once was a ship that put to sea the name of the ship was the Billy of Tea the winds blew up'

    render(
      <Theme>
        <Breadcrumb title={title} />
      </Theme>
    )

    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(`${title.substr(0, 20)}...`)).toBeInTheDocument()
  })
})
