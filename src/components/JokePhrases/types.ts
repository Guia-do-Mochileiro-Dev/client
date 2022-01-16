export interface JokePhrasesProps {
  phrase: string
  author: string
  nextPhrase: () => void
  previousPhrase: () => void
}
