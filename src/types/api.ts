export type ImageProps = {
  url: string
  alternativeText: string
}

export type SocialLinks = {
  title: string
  url: string
}

export type AuthorProps = {
  id: number
  name: string
  photo: ImageProps
  role: string
  description: string
  socialLinks: SocialLinks[]
}

export type AuthorsProps = {
  authors: AuthorProps[]
}

export type PostProps = {
  id: number
  cover: ImageProps
  created_at: string
  title: string
  text: { article: string }
  slug: string
  author: {
    name: string
    photo: ImageProps
  }
}

export type ArticleProps = {
  cover: ImageProps
  created_at: string
  title: string
  text: string
  slug: string
  author: {
    name: string
    photo: ImageProps
  }
}

export type PostsProps = {
  postPages: PostProps[]
}
