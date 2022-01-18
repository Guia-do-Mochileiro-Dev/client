import * as S from './styles'

export const NotFound = () => {
  return (
    <S.Container>
      <S.NotFoundImage
        src="/img/not-found.png"
        alt="Página não encontrado"
        loading="lazy"
      />
    </S.Container>
  )
}
