import Link from 'next/link'
import * as S from './styles'
import logo from '../../../public/img/logo-branca.svg'

export const Footer = () => {
  return (
    <S.Container>
      <S.Logo src={logo} alternativeText="Guia do Mochileiro Dev" />
      <S.Page>
        <Link href="/about-us">Quem Somos</Link>
      </S.Page>
    </S.Container>
  )
}
