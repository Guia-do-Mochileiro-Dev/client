import styled, { css } from 'styled-components'

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
      }
    `}
`

export const Logo = styled.img`
  ${({ theme }) =>
    css`
      && {
        width: 13.5rem;
      }
    `}
`
