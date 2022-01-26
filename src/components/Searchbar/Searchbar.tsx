import { useRouter } from 'next/dist/client/router'
import * as S from './styles'

export const Searchbar = () => {
  const Router = useRouter()

  const handleSearch = (e: any) => {
    const { value } = e.target

    if (value.length > 0 && e.code === 'Enter')
      Router.push({
        pathname: '/search',
        query: { result: value.replaceAll(' ', '-') }
      })
  }

  return (
    <S.Container>
      <S.InputSearch
        type="search"
        onKeyUp={(e) => handleSearch(e)}
        placeholder="Pesquisar..."
        aria-label="search"
      />
      <S.IconSearch />
    </S.Container>
  )
}
