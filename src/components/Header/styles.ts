import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        background: ${theme.colors.blueDark};
        padding: 1.6rem;
      }
    `}
`
export const Nav = styled.div`
  ${({ theme }) =>
    css`
      && {
        max-width: ${theme.grid.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ${media.lessThan('medium')`
          flex-direction: column;
          row-gap: 2rem;
        `}
      }
    `}
`

export const Logo = styled.div`
  position: relative;
  width: 13.5rem;
  height: 8rem;
  img {
    cursor: pointer;
  }
`
