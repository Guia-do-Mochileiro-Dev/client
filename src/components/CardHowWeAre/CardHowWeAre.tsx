import { AuthorProps } from 'types/api'
import * as S from './styles'

const Midia = {
  github: <S.GithubIcon />,
  linkedin: <S.LinkedinIcon />,
  instagram: <S.InstagramIcon />
}

export const CardHowWeAre = ({
  id,
  name,
  photo,
  role,
  description,
  socialLinks
}: AuthorProps) => {
  return (
    <S.Container id={id}>
      <S.Photo src={photo?.url} alt={photo?.alternativeText} />

      <S.Name>{name} </S.Name>
      <S.Role>{role}</S.Role>
      <S.Description>{description}</S.Description>

      <S.SocialMidia>
        {socialLinks?.map(({ url, title }) => {
          return (
            <S.SocialMidiaItem key={url} href={url} target="_blank">
              {Midia[title]}
            </S.SocialMidiaItem>
          )
        })}
      </S.SocialMidia>
    </S.Container>
  )
}
