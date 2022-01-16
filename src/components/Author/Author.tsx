import * as S from './styles'
import { AuthorProps } from './types'

export const Author = ({ photo, name }: AuthorProps) => {
  return (
    <S.Container>
      <S.Photo src={photo.url} alt={photo.alternativeText} />
      <S.Name>{name}</S.Name>
    </S.Container>
  )
}
