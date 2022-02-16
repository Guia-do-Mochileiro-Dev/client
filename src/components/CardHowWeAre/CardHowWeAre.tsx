/* eslint-disable */
import Image from 'next/image'
import { AuthorProps } from 'types/api'
import * as S from './styles'

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
      <S.Photo>
        <Image
          src={photo?.url}
          alt={photo?.alternativeText}
          loading="lazy"
          layout="fill"
          objectFit="cover"
        />
      </S.Photo>

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
