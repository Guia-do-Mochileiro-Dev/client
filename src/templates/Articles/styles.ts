import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        max-width: ${theme.grid.container};
        margin: 6rem auto;
        padding: 0 1rem;
      }
    `}
`

export const Cover = styled.div`
  ${({ theme }) =>
    css`
      && {
        position: relative;
        margin: 4rem 0 1rem;
        width: 100%;
        height: 40rem;
        img {
          border-radius: ${theme.border.radius};
        }
      }
    `}
`

export const Date = styled.p`
  ${({ theme }) =>
    css`
      && {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.blueDark};
        margin-bottom: 3rem;
      }
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

export const Text = styled.div`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.light};
        margin: 2.5rem 0 7rem;
      }
    `}
`
