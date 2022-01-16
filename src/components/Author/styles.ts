import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        display: flex;
        align-items: center;
      }
    `}
`

export const Photo = styled.img`
  ${({ theme }) =>
    css`
      && {
        width: 47px;
        height: 47px;
        border-radius: 60px;
        color: ${theme.colors.black};
        object-fit: fill;
      }
    `}
`

export const Name = styled.h1`
  ${({ theme }) =>
    css`
      && {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.blueDark};
        margin-left: ${theme.spacings.xxsmall};
      }
    `}
`
