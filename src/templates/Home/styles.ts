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

export const Posts = styled.div`
  margin: 6rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-between;
`
export const NotFound = styled.h1`
  ${({ theme }) =>
    css`
      && {
        color: ${theme.colors.blueDark};
        font-size: 3.3rem;
      }
    `}
`
