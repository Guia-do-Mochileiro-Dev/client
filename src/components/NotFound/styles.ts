import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
`

export const NotFoundImage = styled.div`
  position: relative;
  width: 70%;
  height: 75vh;
  margin: auto;
  display: flex;

  ${media.lessThan('small')`
    height: 29vh;
    width: 100%;
  `}
`
