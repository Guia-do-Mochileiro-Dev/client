import { render, screen } from '@testing-library/react'
import { AboutUsTemplate } from 'templates/AboutUs'
import Theme from 'themes'

describe('<AboutUsTemplate />', () => {
  it('should render AboutUsTemplate', () => {
    render(
      <Theme>
        <AboutUsTemplate
          authors={[
            {
              id: 1,
              name: 'Letícia Silva',
              photo: {
                alternativeText: '',
                url: '/uploads/cover_5074a4bf56.png'
              },
              role: 'Front-end Developer',
              description: 'Apaixonada por programação',
              socialLinks: [
                {
                  title: 'instagram',
                  url: 'https://www.instagram.com/'
                },
                {
                  title: 'github',
                  url: 'www.google.com.br'
                },
                {
                  title: 'linkedin',
                  url: 'https://www.linkedin.com/'
                }
              ]
            }
          ]}
        />
      </Theme>
    )

    expect(screen.getByText('Letícia Silva')).toBeInTheDocument()
  })
})
