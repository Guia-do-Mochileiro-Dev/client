import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        max-width: ${theme.grid.container};
        margin: 6rem auto;
        padding: 0 1rem;
        width: 100%;
      }
    `}
`
export const AboutUs = styled.div`
  display: flex;
  margin-top: 4.8rem;
  gap: 6rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;

  ${media.lessThan('medium')`
        justify-content: center;
      `}
`

export const NotFound = styled.h1`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-size: 3.3rem;
      }
    `}
`
