import { NextSeo } from 'next-seo'

import client from 'graphql/client'
import GET_POSTS_SEARCH from 'graphql/queries/getPostsSearch'

import { SearchTemplate } from 'templates/Search'
import { PostsProps } from 'types/api'

interface IResult {
  query: { result: PostsProps }
}

const Search = ({ postPages }: PostsProps) => (
  <>
    <NextSeo
      title="Search | Guia do Mochileiro Dev"
      description="Busque por algum post ou assunto"
    />
    <SearchTemplate postPages={postPages} />
  </>
)

Search.getInitialProps = async ({ query: { result } }: IResult) => {
  try {
    const {
      data: { postPages }
    } = await client.query<PostsProps>({
      query: GET_POSTS_SEARCH,
      fetchPolicy: 'no-cache',
      variables: {
        text: result
      }
    })

    return { revalidate: 60, postPages }
  } catch {
    return { revalidate: 60, postPages: [] }
  }
}

export default Search
