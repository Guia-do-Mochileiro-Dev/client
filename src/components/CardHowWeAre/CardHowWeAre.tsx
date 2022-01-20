/* eslint-disable */
import { AuthorProps } from 'types/api'
import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const Midia = {
  github: <S.GithubIcon />,
  linkedin: <S.LinkedinIcon />,
  instagram: <S.InstagramIcon />
}

export const CardHowWeAre = ({
  name,
  photo,
  role,
  description,
  socialLinks
}: Omit<AuthorProps, 'id'>) => {
  return (
    <S.Container>
      <S.Photo
        src={getImageUrl(photo?.url)}
        alt={photo?.alternativeText}
        loading="lazy"
      />

      <S.Name>{name} </S.Name>
      <S.Role>{role}</S.Role>
      <S.Description>{description}</S.Description>

      <S.SocialMidia>
        {socialLinks?.map(({ url, title }) => {
          return (
            <S.SocialMidiaItem key={url} href={url} target="_blank">
              {(Midia as any)[title]}
            </S.SocialMidiaItem>
          )
        })}
      </S.SocialMidia>
    </S.Container>
  )
}
