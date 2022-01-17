import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) =>
    css`
      && {
        max-width: ${theme.grid.container};
        margin: 6rem auto;
        padding: 0 1rem;
        width: 100%;
      }
    `}
`
export const AboutUs = styled.div`
  display: flex;
  margin-top: 4.8rem;
  gap: 9.6rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
`
