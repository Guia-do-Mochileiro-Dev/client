import Image from 'next/image'
import * as S from './styles'
import { AuthorProps } from './types'
import { getImageUrl } from 'utils/getImageUrl'

export const Author = ({ photo, name }: AuthorProps) => {
  return (
    <S.Container aria-label={name}>
      <S.Photo>
        <Image
          src={getImageUrl(photo.url)}
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
