import Link from 'next/link'
import { JokePhrases } from 'components/JokePhrases'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { jokes } from 'components/JokePhrases/jokes'

interface IJoke {
  id: number
  phrase: string
  author: string
}

export const Footer = () => {
  const [joke, setJoke] = useState<IJoke[]>([])
  const [currentJoke, setCurrentJoke] = useState<IJoke>(jokes[0])

  useEffect(() => {
    setJoke(jokes)
  }, [])

  const nextPhrase = () => {
    const next = currentJoke.id >= joke.length ? 0 : currentJoke.id
    setCurrentJoke(joke[next])
  }

  const previousPhrase = () => {
    const previous = currentJoke.id === 1 ? joke.length - 1 : currentJoke.id - 2
    setCurrentJoke(joke[previous])
  }

  const jokePhrases = {
    phrase: currentJoke?.phrase,
    author: currentJoke?.author,
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
