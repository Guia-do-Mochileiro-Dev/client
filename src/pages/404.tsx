import { NotFound } from 'components/NotFound'
import { Container } from 'templates/Home/styles'
import ReactGA from 'react-ga'

export default function Page404() {
  ReactGA.modalview('/404')

  return (
    <Container>
      <NotFound />
    </Container>
  )
}
