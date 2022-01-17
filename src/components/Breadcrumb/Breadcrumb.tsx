import Link from 'next/link'
import * as S from './styles'
import { BreadcrumbProps } from './types'

export const Breadcrumb = ({ slug }: BreadcrumbProps) => {
  const slugFormat = slug.length > 20 ? slug.slice(0, 20).concat('...') : slug

  return (
    <S.Container>
      <S.Link>
        <Link href="/">Home</Link>
      </S.Link>
      <S.Link>{'>'}</S.Link>
      <S.Link>{slugFormat}</S.Link>
    </S.Container>
  )
}
