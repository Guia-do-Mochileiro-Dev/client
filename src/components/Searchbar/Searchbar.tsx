import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import * as S from './styles'

export const Searchbar = () => {
  const [value, setValue] = useState<String>('')
  const Router = useRouter()

  const handleSearch = (value: string) => {
    if (value.length > 0)
      Router.push({
        pathname: '/search',
        query: { result: value.replaceAll(' ', '-') }
      })
  }

  return (
    <S.Container>
      <S.InputSearch
        type="search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Pesquisar..."
        aria-label="search"
      />
      <S.IconSearch onClick={() => handleSearch(value)} />
    </S.Container>
  )
}
