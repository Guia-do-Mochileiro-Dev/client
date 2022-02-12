import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Photo = styled.div`
  position: relative;
  width: 47px;
  height: 47px;
  img {
    border-radius: 60px;
  }
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
