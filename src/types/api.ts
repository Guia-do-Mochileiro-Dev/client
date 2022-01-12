export type ImageProps = {
  url: string
  alternativeText: string
}

export type AuthorProps = {
  id: number
  name: string
  photo: ImageProps
  role: string
  description: string
}

export type AuthorsProps = {
  authors: AuthorProps[]
}

export type PostProps = {
  id: number
  cover: ImageProps
  title: string
  text: string
  slug: string
}

export type PostsProps = {
  postPages: PostProps[]
}
