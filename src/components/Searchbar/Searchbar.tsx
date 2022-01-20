import * as S from './styles'
//import { SearchbarProps } from './types'
// { value, handleChange }: SearchbarProps
export const Searchbar = () => {
  return (
    <S.Container>
      <S.InputSearch
        type="text"
        // value={value}
        // onChange={handleChange}
        placeholder="Pesquisar..."
        aria-label="search"
      />
      <S.IconSearch />
    </S.Container>
  )
}
