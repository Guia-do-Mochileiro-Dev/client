import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'
import { Author } from 'components/Author'
import { PostProps } from 'types/api'
import { formatDate } from 'utils/formatDate'

interface IMainArticle extends Omit<PostProps, 'id' | 'text'> {
  text: string
}

export const MainArticle = ({
  cover,
  created_at,
  title,
  text,
  slug,
  author
}: IMainArticle) => {
  const titleFormat =
    title.length > 70 ? title.slice(0, 70).concat('...') : title

  const descriptionFormat =
    text.length > 565 ? text.slice(0, 565).concat('...') : text

  return (
    <Link href={`/article/${slug}`}>
      <S.Container aria-label="main article">
        <S.Cover>
          <Image
            src={cover.url}
            alt={cover.alternativeText}
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </S.Cover>
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
