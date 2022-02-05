import { NextSeo } from 'next-seo'

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
    <>
      <NextSeo
        title="Guia do Mochileiro Dev"
        description={title}
        openGraph={{
          url: `https://guiadomochileirodev.vercel.app/article/${slug}`,
          title: 'Guia do Mochileiro Dev',
          description: title,
          images: [
            {
              url: `https://guiadomochileirodev.vercel.app/img/${cover.url}`,
              width: 1280,
              height: 720,
              alt: title
            }
          ]
        }}
      />
      <S.Container>
        <Breadcrumb title={title} />
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
    </>
  )
}
