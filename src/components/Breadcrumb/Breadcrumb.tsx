import Link from 'next/link'
import * as S from './styles'
import { BreadcrumbProps } from './types'

export const Breadcrumb = ({ title }: BreadcrumbProps) => {
  const titleFormat =
    title.length > 20 ? title.slice(0, 20).concat('...') : title

  return (
    <S.Container>
      <S.Link>
        <Link href="/">Home</Link>
      </S.Link>
      <S.Link>{'>'}</S.Link>
      <S.Link>{titleFormat}</S.Link>
    </S.Container>
  )
}
