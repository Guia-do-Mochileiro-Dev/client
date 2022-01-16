import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import {
  ArrowIosForwardOutline,
  ArrowIosBackOutline
} from '@styled-icons/evaicons-outline'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        display: flex;
        align-items: start;
        justify-content: center;
        column-gap: ${theme.spacings.medium};
        border-radius: ${theme.border.radius};
        width: 100%;
        box-shadow: 0px 3px 6px #00000029;
        padding: 5rem;
      }
    `};
`

export const Previous = styled(ArrowIosBackOutline)`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        width: ${theme.spacings.small};
        cursor: pointer;

        &:hover {
          color: ${theme.colors.green};
        }

        ${media.lessThan('medium')`
          width: 4rem;
        `}

        ${media.lessThan('small')`
          width: 8rem;
        `}
      }
    `}
`

export const Next = styled(ArrowIosForwardOutline)`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        width: ${theme.spacings.small};
        cursor: pointer;

        &:hover {
          color: ${theme.colors.green};
        }

        ${media.lessThan('medium')`
          width: 4rem;
        `}

        ${media.lessThan('small')`
          width: 8rem;
        `}
      }
    `}
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Phrase = styled.h1`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-size: ${theme.font.sizes.xlarge};
        text-align: center;
      }
    `}
`

export const Author = styled.p`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-weight: ${theme.font.light};
        font-size: ${theme.font.sizes.large};
      }
    `}
`
