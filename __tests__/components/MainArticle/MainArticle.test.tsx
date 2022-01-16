import { render, screen } from '@testing-library/react'
import Theme from 'themes'
import { MainArticle } from '../../../src/components/MainArticle'

describe('<MainArticle />', () => {
  it('should render MainArticle', () => {
    const article = {
      id: 2,
      cover: {
        alternativeText: '',
        url: 'http://localhost:1337/uploads/cover_5074a4bf56.png'
      },
      created_at: '2022-01-06T22:46:37.087Z',
      title:
        'There once was a ship that put to sea the name of the ship was the Billy of Tea the winds blew up',
      text: '<p>Soon may the Wellerman come To bring us sugar and tea and rum One day, when the tonguing is done Well take our leave and go Shed not been two weeks from shore ...</p>',
      slug: 'micro-frontend',
      author: {
        name: 'Letícia Silva',
        photo: {
          url: 'https://avatars.githubusercontent.com/u/56488480?v=4',
          alternativeText: 'Letícia Alexandre'
        }
      }
    }
    render(
      <Theme>
        <MainArticle
          id={article.id}
          cover={article.cover}
          created_at={article.created_at}
          title={article.title}
          text={article.text}
          slug={article.slug}
          author={article.author}
        />
      </Theme>
    )

    expect(screen.getByText(article.title)).toBeInTheDocument()
  })
})
