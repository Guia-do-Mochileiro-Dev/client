import { Github } from '@styled-icons/boxicons-logos/Github'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import styled, { css } from 'styled-components'
import { Instagram } from 'styled-icons/boxicons-logos'

export const Container = styled.div`
  ${({ theme }) => css`
    && {
      width: 223px;
      height: 378px;
      box-shadow: 0px -4px 39px #00000029;
      margin: auto 0;
      border-radius: ${theme.border.radius};
      padding: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      transition: box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: 0px -4px 39px 2px #00000045;
      }
    }
  `}
`
export const Photo = styled.div`
  position: relative;
  width: 162px;
  height: 154px;
  img {
    border-radius: 50%;
  }
`

export const Name = styled.div`
  ${({ theme }) => css`
    && {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.blueDark};
    }
  `}
`
export const Role = styled.div`
  ${({ theme }) => css`
    && {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.blueDark};
    }
  `}
`
export const Description = styled.div`
  ${({ theme }) => css`
    && {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
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
      border-radius: ${theme.border.radius};
      padding: 4px;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        background: ${theme.colors.green};
        border: ${theme.colors.white};
      }
    }
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
