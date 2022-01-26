import { Author } from 'components/Author'
import { Breadcrumb } from 'components/Breadcrumb'
import { PostProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import { formatDate } from 'utils/formatDate'
import * as S from './styles'

export const ArticlesTemplate = ({
  slug,
  cover,
  created_at,
  title,
  text,
  author
}: PostProps) => {
  return (
    <S.Container>
      <Breadcrumb slug={slug} />
      <S.Cover
        src={getImageUrl(cover.url)}
        alt={cover.alternativeText}
        loading="lazy"
      />
      <S.Date>{formatDate(created_at)}</S.Date>
      <S.Title>{title}</S.Title>
      <S.Text dangerouslySetInnerHTML={{ __html: text }} />
      {!!author && <Author {...author} />}
    </S.Container>
  )
}
