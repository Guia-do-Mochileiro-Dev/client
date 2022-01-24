import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { ArticlesTemplate } from 'templates/Articles'
import { PostProps } from 'types/api'
import client from 'graphql/client'
import GET_POSTS from 'graphql/queries/getPosts'
import GET_POST_SLUG from 'graphql/queries/getPostSlug'

export default function Articles(props: PostProps) {
  const router = useRouter()

  if (router.isFallback) return <p>Carregando...</p>

  return <ArticlesTemplate {...props} />
}

export async function getStaticPaths() {
  const { postPages } = await client.request(GET_POSTS)
  const paths = postPages?.map((post: PostProps) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { postPages } = await client.request(GET_POST_SLUG, {
    slug: params?.slug
  })

  if (!postPages) {
    return { notFound: true }
  }

  return {
    revalidate: 60,
    props: postPages[0]
  }
}
