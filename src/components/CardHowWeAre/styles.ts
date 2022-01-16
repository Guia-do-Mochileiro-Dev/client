import { Github } from '@styled-icons/boxicons-logos/Github'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import styled, { css } from 'styled-components'
import { Instagram } from 'styled-icons/boxicons-logos'

export const Container = styled.div`
  width: 223px;
  height: 378px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: auto;
  border-radius: 10px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const Photo = styled.img`
  width: 162px;
  height: 154px;
  border-radius: 50%;
`

export const Name = styled.div`
  ${({ theme }) => css`
    && {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.blueDark};
    }
  `}
`
export const Role = styled.div`
  ${({ theme }) => css`
    && {
      font-family: ${theme.font.family};
      font-size: 1rem;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.blueDark};
    }
  `}
`
export const Description = styled.div`
  ${({ theme }) => css`
    && {
      font-family: ${theme.font.family};
      font-size: 1.1rem;
      font-weight: ${theme.font.light};
      color: ${theme.colors.blueDark};
      text-align: center;
    }
  `}
`
export const SocialMidia = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`

export const SocialMidiaItem = styled.a`
  ${({ theme }) => css`
    && {
      width: 34px;
      height: 34px;
      border: 1px solid ${theme.colors.blueDark};
      border-radius: 5px;

      padding: 4px;
    }
    :hover {
      cursor: pointer;
      background: ${theme.colors.green};
      border: ${theme.colors.white};
  `}
`

export const GithubIcon = styled(Github)`
  ${({ theme }) => css`
    && {
      color: ${theme.colors.blueDark};
    }
  `}
`
export const LinkedinIcon = styled(LinkedinSquare)`
  ${({ theme }) => css`
    && {
      color: ${theme.colors.blueDark};
    }
  `}
`
export const InstagramIcon = styled(Instagram)`
  ${({ theme }) => css`
    && {
      color: ${theme.colors.blueDark};
    }
  `}
`
