import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode
} from 'react'
import { jokes } from 'components/JokePhrases/jokes'

type Joke = {
  id: number
  phrase: string
  author: string
}

type JokePhrasesContextProviderProps = {
  children: ReactNode
}

type JokePhrasesContextProps = {
  phrase: string
  author: string
  nextPhrase: () => void
  previousPhrase: () => void
}

const JokePhrasesContext = createContext({} as JokePhrasesContextProps)

export const JokePhrasesContextProvider = ({
  children
}: JokePhrasesContextProviderProps) => {
  const [joke, setJoke] = useState<Joke[]>([])
  const [currentJoke, setCurrentJoke] = useState<Joke>(jokes[0])
  const [value, setValue] = useState({
    phrase: jokes[0].phrase,
    author: jokes[0].author
  })

  useEffect(() => {
    setJoke(jokes)
    setCurrentJoke(jokes[0])
  }, [])

  const nextPhrase = () => {
    const next = currentJoke.id >= joke.length ? 0 : currentJoke.id

    setValue({
      phrase: joke[next].phrase,
      author: joke[next].author
    })
    setCurrentJoke(joke[next])
  }

  const previousPhrase = () => {
    const previous = currentJoke.id === 1 ? joke.length - 1 : currentJoke.id - 2

    setValue({
      phrase: joke[previous].phrase,
      author: joke[previous].author
    })
    setCurrentJoke(joke[previous])
  }

  return (
    <JokePhrasesContext.Provider
      value={{ ...value, nextPhrase, previousPhrase }}
    >
      {children}
    </JokePhrasesContext.Provider>
  )
}

export const useJokePhrases = () => {
  const value = useContext(JokePhrasesContext)

  return value
}
