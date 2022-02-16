import Image from 'next/image'
import * as S from './styles'
import { AuthorProps } from './types'

export const Author = ({ photo, name }: AuthorProps) => {
  return (
    <S.Container aria-label={name}>
      <S.Photo>
        <Image
          src={photo.url}
          alt={photo.alternativeText}
          loading="lazy"
          layout="fill"
          objectFit="cover"
        />
      </S.Photo>

      <S.Name>{name}</S.Name>
    </S.Container>
  )
}
