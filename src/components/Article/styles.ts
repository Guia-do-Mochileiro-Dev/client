import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        box-shadow: 0px -4px 39px #00000029;
        border-radius: ${theme.border.radius};
        max-width: 36rem;
        transition: box-shadow 0.3s ease-in-out;

        &:hover {
          box-shadow: 0px -4px 39px 2px #00000045;
        }
      }
    `}
`

export const Cover = styled.img`
  ${({ theme }) =>
    css`
      && {
        border-top-left-radius: ${theme.border.radius};
        border-top-right-radius: ${theme.border.radius};
        width: 100%;
        height: 19rem;
        object-fit: cover;
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
        margin: ${theme.spacings.small};
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
        font-size: ${theme.font.sizes.xlarge};
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
      }
    `}
`
