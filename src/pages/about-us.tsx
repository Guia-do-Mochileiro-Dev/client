import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_AUTHORS from 'graphql/queries/getAuthors'

import { AboutUsTemplate } from 'templates/AboutUs'
import { AuthorsProps } from 'types/api'

const AboutUs = ({ authors }: AuthorsProps) => (
  <AboutUsTemplate authors={authors} />
)

export const getStaticProps: GetStaticProps = async () => {
  const { authors } = await client.request(GET_AUTHORS)

  return { revalidate: 60, props: { authors } }
}
export default AboutUs
