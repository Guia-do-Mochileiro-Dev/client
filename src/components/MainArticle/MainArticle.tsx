import Link from 'next/link'
import * as S from './styles'
import { Author } from 'components/Author'
import { PostProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

export const MainArticle = ({
  id,
  cover,
  created_at,
  title,
  text,
  slug,
  author
}: PostProps) => {
  const date = new Date(created_at)
  const dateFormat = date.toLocaleString('pt-br')

  return (
    <Link href={`/article/${slug}`}>
      <S.Container aria-label="main article" id={id}>
        <S.Cover
          src={getImageUrl(cover.url)}
          alternativeText={cover.alternativeText}
          loading="lazy"
        />
        <S.Details>
          <S.Date>{dateFormat}</S.Date>
          <S.Title>{title}</S.Title>
          <S.Text dangerouslySetInnerHTML={{ __html: text }} />
          <Author name={author.name} photo={author.photo} />
        </S.Details>
      </S.Container>
    </Link>
  )
}
