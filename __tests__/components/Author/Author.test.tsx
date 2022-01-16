import { render, screen } from '@testing-library/react'
import Theme from 'themes'
import { Author } from 'components/Author'

describe('<Author />', () => {
  it('should render Author', () => {
    const name = 'Letícia Alexadre'
    const photo = {
      url: 'https://avatars.githubusercontent.com/u/56488480?v=4',
      alternativeText: 'Letícia Alexandre'
    }
    render(
      <Theme>
        <Author name={name} photo={photo} />
      </Theme>
    )

    expect(screen.getByText(name)).toBeInTheDocument()
  })
})
