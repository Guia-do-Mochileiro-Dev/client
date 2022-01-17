import { Breadcrumb } from 'components/Breadcrumb'
import { CardHowWeAre } from 'components/CardHowWeAre'
import { AuthorsProps } from 'types/api'
import * as S from './styles'

export const AboutUsTemplate = ({ authors }: AuthorsProps) => {
  return (
    <S.Container>
      <Breadcrumb slug="Quem somos" />
      <S.AboutUs>
        {authors?.map((author) => (
          <CardHowWeAre
            key={author.id}
            id={author.id}
            name={author.name}
            photo={author.photo}
            role={author.role}
            description={author.description}
            socialLinks={author.socialLinks}
          />
        ))}
      </S.AboutUs>
    </S.Container>
  )
}
