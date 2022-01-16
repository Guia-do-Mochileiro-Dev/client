import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'

import { HomeTemplate } from 'templates/Home'
import { PostsProps } from 'types/api'

const Home = ({ postPages }: PostsProps) => (
  <HomeTemplate postPages={postPages} />
)

export const getStaticProps: GetStaticProps = async () => {
  const { postPages } = await client.request(GET_POSTS)

  return { revalidate: 60, props: { postPages } }
}
export default Home
