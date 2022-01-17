import { Breadcrumb } from 'components/Breadcrumb'
import { AuthorsProps } from 'types/api'
import * as S from './styles'

export const AboutUsTemplate = ({ authors }: AuthorsProps) => {
  console.log(authors)
  return (
    <S.Container>
      <Breadcrumb slug="Quem somos" />
      {/* TODO - criar página de quem somos */}
    </S.Container>
  )
}
