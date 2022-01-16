import * as S from './styles'
import { AuthorProps } from './types'

export const Author = ({ photo, name }: AuthorProps) => {
  return (
    <S.Container aria-label={name}>
      <S.Photo src={photo.url} alt={photo.alternativeText} loading="lazy" />
      <S.Name>{name}</S.Name>
    </S.Container>
  )
}
