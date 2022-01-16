import Link from 'next/link'
import * as S from './styles'
import { BreadcrumbProps } from './types'

export const Breadcrumb = ({ slug }: BreadcrumbProps) => {
  const slugFormat = slug.substr(0, 20)

  return (
    <S.Container>
      <S.Link>
        <Link href="/">Home</Link>
      </S.Link>
      <S.Link>{'>'}</S.Link>
      <S.Link>{slugFormat}...</S.Link>
    </S.Container>
  )
}
