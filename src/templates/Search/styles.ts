import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        max-width: ${theme.grid.container};
        margin: 6rem auto;
        padding: 0 1rem;
        min-height: calc(100vh - 400px);
      }

      .infinite-scroll-component {
        overflow: initial !important;
      }
    `}
`

export const Posts = styled.div`
  margin: 6rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: flex-start;
  ${media.lessThan('large')`
    justify-content: center;
  `}
`
export const Title = styled.h1`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-size: 3.3rem;
      }
    `}
`
