import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_POSTS_SEARCH from 'graphql/queries/getPostsSearch'

import { SearchTemplate } from 'templates/Search'
import { PostsProps } from 'types/api'

const Search = ({ postPages }: PostsProps) => (
  <SearchTemplate postPages={postPages} />
)

Search.getInitialProps = async ({ query: { result } }) => {
  const { postPages } = await client.request(GET_POSTS_SEARCH, {
    text: result
  })

  return { postPages }
}

export default Search