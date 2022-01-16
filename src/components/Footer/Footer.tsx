import Link from 'next/link'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <S.Logo
        src="/img/logo-branca.svg"
        alternativeText="Guia do Mochileiro Dev"
      />
      <S.Page>
        <Link href="/about-us">Quem Somos</Link>
      </S.Page>
    </S.Container>
  )
}
