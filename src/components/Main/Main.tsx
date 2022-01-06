import { Container } from './styles'
import { MainProps } from './types'

export const Main = ({ title, description }: MainProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </Container>
  )
}
