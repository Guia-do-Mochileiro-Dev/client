import { GetStaticProps } from 'next'
import ReactGA from 'react-ga'

import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'

import { HomeTemplate } from 'templates/Home'
import { PostsProps } from 'types/api'

const Home = ({ postPages }: PostsProps) => {
  ReactGA.initialize('G-5RVQ4C9NKZ')

  return <HomeTemplate postPages={postPages} />
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { postPages }
  } = await client.query<PostsProps>({
    query: GET_POSTS
  })

  return { revalidate: 60, props: { postPages } }
}
export default Home
