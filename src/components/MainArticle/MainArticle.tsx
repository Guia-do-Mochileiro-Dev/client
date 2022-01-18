import Link from 'next/link'
import * as S from './styles'
import { Author } from 'components/Author'
import { PostProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import { formatDate } from 'utils/formatDate'

export const MainArticle = ({
  id,
  cover,
  created_at,
  title,
  text,
  slug,
  author
}: PostProps) => {
  const titleFormat =
    title.length > 70 ? title.slice(0, 70).concat('...') : title

  const descriptionFormat =
    text.length > 565 ? text.slice(0, 565).concat('...') : text
  console.log(text)
  return (
    <Link href={`/article/${slug}`}>
      <S.Container aria-label="main article" id={id}>
        <S.Cover
          src={getImageUrl(cover.url)}
          alt={cover.alternativeText}
          loading="lazy"
        />
        <S.Details>
          <S.Date>{formatDate(created_at)}</S.Date>
          <S.Title>{titleFormat}</S.Title>
          <S.Text dangerouslySetInnerHTML={{ __html: descriptionFormat }} />
          <Author name={author.name} photo={author.photo} />
        </S.Details>
      </S.Container>
    </Link>
  )
}
