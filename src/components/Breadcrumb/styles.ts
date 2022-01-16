import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        display: flex;
        column-gap: ${theme.spacings.xxsmall};
      }
    `}
`

export const Link = styled.p`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
        text-transform: uppercase;

        a {
          text-decoration: none;
          cursor: pointer;
          color: ${theme.colors.blueDark};
          transition: color 0.3s ease-in-out;

          &:hover {
            color: ${theme.colors.green};
          }
        }
      }
    `}
`
