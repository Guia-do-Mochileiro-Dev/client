import { render, screen } from '@testing-library/react'
import Theme from 'themes'
import { CardHowWeAre } from '../../../src/components/CardHowWeAre'

describe('<CardHowWeAre />', () => {
  const id = 1
  const name = 'Swanny '
  const photo = {
    url: 'https://media-exp1.licdn.com/dms/image/C4E03AQG06GnvhQmJ_A/profile-displayphoto-shrink_200_200/0/1641990065320?e=1648080000&v=beta&t=IzKMeXPcBscxKXzpto0rzmfKT8uHIp5WXLS66tklWtc',
    alternativeText: 'Swanny'
  }
  const role = 'Frontend Developer'
  const description =
    'Oi, eu sou a Swanny, no capitulo anterior aprendemos algo e hoje iremos aprender algo mais'
  const socialLinks = [
    { url: 'https://www.instagram.com/swannykathllen/', title: 'instagram' },
    { url: 'https://github.com/SwannyAlves', title: 'github' },
    { url: 'https://www.linkedin.com/in/swanny-alves/', title: 'linkedin' }
  ]
  it('should render CardHowWeAre', () => {
    render(
      <Theme>
        <CardHowWeAre
          id={id}
          name={name}
          photo={photo}
          role={role}
          description={description}
          socialLinks={socialLinks}
        />
      </Theme>
    )

    expect(screen.getByText(description)).toBeInTheDocument()
  })
})
