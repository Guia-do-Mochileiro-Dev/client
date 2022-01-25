import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_POST_SEARCH from 'graphql/queries/getPostsSearch'
import GET_POSTS from 'graphql/queries/getPosts'

import { SearchTemplate } from 'templates/Search'
import { PostsProps } from 'types/api'

const Search = ({ postPages }: PostsProps) => (
  <SearchTemplate postPages={postPages} />
)

export const getStaticProps: GetStaticProps = async () => {
  //const { postPages } = await client.request(GET_POST_SEARCH)
  const { postPages } = await client.request(GET_POSTS)

  return { revalidate: 60, props: { postPages } }
}
export default Search
