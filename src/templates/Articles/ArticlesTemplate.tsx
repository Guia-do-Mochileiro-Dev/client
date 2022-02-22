import { NextSeo } from 'next-seo'
import Image from 'next/image'

import { Author } from 'components/Author'
import { Breadcrumb } from 'components/Breadcrumb'
import { PostProps } from 'types/api'
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
          url: `https://guiadomochileirodev.netlify.app/article/${slug}`,
          title: 'Guia do Mochileiro Dev',
          description: title,
          images: [
            {
              url: `https://guiadomochileirodev.netlify.app/img/${cover.url}`,
              width: 1280,
              height: 720,
              alt: title
            }
          ]
        }}
      />
      <S.Container>
        <Breadcrumb title={title} />
        <S.Cover>
          <Image
            src={cover.url}
            alt={cover.alternativeText}
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </S.Cover>

        <S.Date>{formatDate(created_at)}</S.Date>
        <S.Title>{title}</S.Title>
        <S.Text dangerouslySetInnerHTML={{ __html: text.article }} />
        {!!author && <Author {...author} />}
      </S.Container>
    </>
  )
}
