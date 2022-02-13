import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'

import client from 'graphql/client'
import GET_POSTS_SEARCH from 'graphql/queries/getPostsSearch'

import { SearchTemplate } from 'templates/Search'
import { PostsProps } from 'types/api'

interface IResult {
  query: { result: PostsProps }
}

const Search = ({ postPages }: PostsProps) => {
  const router = useRouter()

  if (!router.isFallback && !postPages) {
    return { notFound: true }
  }
  return (
    <>
      <NextSeo
        title="Search | Guia do Mochileiro Dev"
        description="Busque por algum post ou assunto"
      />
      <SearchTemplate postPages={postPages} />
    </>
  )
}

Search.getInitialProps = async ({ query: { result } }: IResult) => {
  try {
    const {
      data: { postPages }
    } = await client.query<PostsProps>({
      query: GET_POSTS_SEARCH,
      variables: {
        text: result
      }
    })

    return { postPages }
  } catch {
    return { postPages: [] }
  }
}

export default Search
