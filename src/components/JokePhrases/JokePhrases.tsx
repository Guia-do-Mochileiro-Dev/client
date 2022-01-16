import * as S from './styles'
import { JokePhrasesProps } from './types'

export const JokePhrases = ({
  phrase,
  author,
  nextPhrase,
  previousPhrase
}: JokePhrasesProps) => {
  return (
    <S.Container>
      <S.Previous onClick={previousPhrase} />
      <S.Wrapper>
        <S.Phrase>{phrase}</S.Phrase>
        <S.Author>{author}</S.Author>
      </S.Wrapper>
      <S.Next onClick={nextPhrase} />
    </S.Container>
  )
}
