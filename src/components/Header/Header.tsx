import * as S from './styles'
import { Searchbar } from 'components/Searchbar'

export const Header = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.Logo src="/img/logo-branca.svg" alt="Guia do Mochileiro Dev" />
        <Searchbar />
      </S.Nav>
    </S.Container>
  )
}
