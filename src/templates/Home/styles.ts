import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        max-width: ${theme.grid.container};
        margin: 6rem auto;
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
