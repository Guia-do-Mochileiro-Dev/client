import Link from 'next/link'
import { JokePhrases } from 'components/JokePhrases'
import * as S from './styles'

export const Footer = () => {
  const mock = {
    phrase:
      'Se até as variáveis precisam ser declaradas porque não me declarar pra você?',
    author: 'Hebert Barros',
    nextPhrase: () => {},
    previousPhrase: () => {}
  }
  return (
    <>
      <S.Phrases>
        <JokePhrases {...mock} />
      </S.Phrases>
      <S.Container>
        <Link href="/">
          <S.Logo
            src="/img/logo-branca.svg"
            alternativeText="Guia do Mochileiro Dev"
          />
        </Link>
        <S.Page>
          <Link href="/about-us">Quem Somos</Link>
        </S.Page>
      </S.Container>
    </>
  )
}
