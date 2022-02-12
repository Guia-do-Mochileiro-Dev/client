import Image from 'next/image'
import * as S from './styles'

export const NotFound = () => {
  return (
    <S.Container>
      <S.NotFoundImage>
        <Image
          src="/img/not-found.png"
          alt="Página não encontrado"
          loading="lazy"
          layout="fill"
          objectFit="cover"
        />
      </S.NotFoundImage>
    </S.Container>
  )
}
