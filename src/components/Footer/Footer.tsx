import Link from 'next/link'
import { JokePhrases } from 'components/JokePhrases'
import * as S from './styles'
import { useJokePhrases } from 'hooks/useJokePhrases'

export const Footer = () => {
  const { phrase, author, nextPhrase, previousPhrase } = useJokePhrases()
  const jokePhrases = {
    phrase,
    author,
    nextPhrase,
    previousPhrase
  }

  return (
    <>
      <S.Phrases>
        <JokePhrases {...jokePhrases} />
      </S.Phrases>
      <S.Container>
        <Link href="/">
          <S.Logo
            src="/img/logo-branca.svg"
            alt="Guia do Mochileiro Dev"
            loading="lazy"
          />
        </Link>
        <S.Page>
          <Link href="/about-us">Quem Somos</Link>
        </S.Page>
      </S.Container>
    </>
  )
}
