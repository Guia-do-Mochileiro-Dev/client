import Link from 'next/link'
import * as S from './styles'
import { Searchbar } from 'components/Searchbar'

export const Header = () => {
  return (
    <S.Container>
      <S.Nav>
        <Link href="/">
          <S.Logo
            src="/img/logo-branca.svg"
            alt="Guia do Mochileiro Dev"
            loading="lazy"
          />
        </Link>
        <Searchbar />
      </S.Nav>
    </S.Container>
  )
}
