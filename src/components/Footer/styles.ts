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
      }
    `}
`

export const Logo = styled.img`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.black};
        width: 25rem;
        width: 18rem;
        object-fit: cover;
      }
    `}
`

export const Page = styled.h1`
  ${({ theme }) =>
    css`
      && {
        padding-bottom: 4rem;
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
