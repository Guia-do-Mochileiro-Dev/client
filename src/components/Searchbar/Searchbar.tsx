import * as S from './styles'
import { SearchbarProps } from './types'

export const Searchbar = ({ value, handleChange }: SearchbarProps) => {
  return (
    <S.Container>
      <S.InputSearch
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Pesquisar..."
        aria-label="search"
      />
      <S.IconSearch />
    </S.Container>
  )
}
