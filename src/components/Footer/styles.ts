import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        background: ${theme.colors.blueDark};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4rem;
        padding-top: 14rem;
        z-index: 0;
      }
    `}
`

export const Logo = styled.div`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.black};
        width: 15rem;
        height: 10rem;
        cursor: pointer;
        position: relative;
      }
    `}
`

export const Page = styled.h1`
  ${({ theme }) =>
    css`
      && {
        padding-top: 4rem;
        a {
          color: ${theme.colors.white};
          font-weight: ${theme.font.bold};
          font-size: ${theme.font.sizes.xlarge};
          text-decoration: none;
          transition: color 0.3s ease-in-out;

          &:hover {
            color: ${theme.colors.green};
          }
        }
      }
    `}
`

export const Phrases = styled.div`
  ${({ theme }) =>
    css`
      && {
        max-width: ${theme.grid.container};
        margin: 0 auto;
        margin-bottom: -7.5rem;
        position: relative;
        z-index: 99;
        padding: 0 1rem;
      }
    `}
`
