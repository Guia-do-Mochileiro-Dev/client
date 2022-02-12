import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'
import { Searchbar } from 'components/Searchbar'

export const Header = () => {
  return (
    <S.Container>
      <S.Nav>
        <Link href="/">
          <S.Logo>
            <Image
              src="/img/logo-branca.svg"
              alt="Guia do Mochileiro Dev"
              loading="lazy"
              layout="fill"
              objectFit="cover"
            />
          </S.Logo>
        </Link>
        <Searchbar />
      </S.Nav>
    </S.Container>
  )
}
