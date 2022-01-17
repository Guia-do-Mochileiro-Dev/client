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

export const Cover = styled.img`
  ${({ theme }) =>
    css`
      && {
        border-radius: ${theme.border.radius};
        margin: 4rem 0 1rem;
        width: 100%;
        height: 40rem;
        object-fit: cover;
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

export const Text = styled.p`
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