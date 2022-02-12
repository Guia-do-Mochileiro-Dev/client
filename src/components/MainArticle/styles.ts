import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: ${theme.spacings.large};
        cursor: pointer;
      }
    `}
`

export const Cover = styled.div`
  ${({ theme }) =>
    css`
      && {
        position: relative;
        width: 100%;
        height: 100%;
        img {
          border-radius: ${theme.border.radius};
        }
      }
    `}
`

export const Details = styled.div`
  ${({ theme }) =>
    css`
      && {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: ${theme.spacings.xsmall};
      }
    `}
`

export const Date = styled.p`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
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
      }
    `}
`
