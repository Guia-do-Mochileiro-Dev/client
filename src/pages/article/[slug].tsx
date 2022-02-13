import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { ArticlesTemplate } from 'templates/Articles'
import { PostProps } from 'types/api'
import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'
import GET_POST_SLUG from 'graphql/queries/getPostSlug'
import ReactGA from 'react-ga'

function Articles(props: PostProps) {
  ReactGA.modalview(`/${props.slug}`)

  const router = useRouter()

  if (router.isFallback) return <p>Carregando...</p>

  return <ArticlesTemplate {...props} />
}

export async function getStaticPaths() {
  const {
    data: { postPages }
  } = await client.query({ query: GET_POSTS })
  const paths = postPages?.map((post: PostProps) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { postPages }
  } = await client.query({
    query: GET_POST_SLUG,
    variables: {
      slug: params?.slug
    }
  })

  if (postPages.length === 0) {
    return { notFound: true }
  }

  return {
    revalidate: 60,
    props: postPages[0]
  }
}

export default Articles
