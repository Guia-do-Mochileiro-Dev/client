import styled, { css } from 'styled-components'
import { Search } from '@styled-icons/bootstrap'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        background: ${theme.colors.white};
        border-radius: ${theme.border.radius};
        width: 100%;
        max-width: 430px;
        display: flex;
        column-gap: 1rem;
        padding: 1.5rem;
      }
    `}
`

export const InputSearch = styled.input`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-size: ${theme.font.sizes.medium};
        border: none;
        width: 100%;
        outline: 0;
        max-height: 5rem;

        ::placeholder {
          color: ${theme.colors.blueDark};
        }
      }
    `}
`

export const IconSearch = styled(Search)`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        width: ${theme.spacings.xsmall};
      }
    `}
`
