import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import ReactGA from 'react-ga'

import client from 'graphql/client'
import GET_AUTHORS from 'graphql/queries/getAuthors'

import { AboutUsTemplate } from 'templates/AboutUs'
import { AuthorsProps } from 'types/api'

const AboutUs = ({ authors }: AuthorsProps) => {
  ReactGA.modalview('/about-us')

  return (
    <>
      <NextSeo
        title="Quem Somos | Guia do Mochileiro Dev"
        description="Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D"
      />
      <AboutUsTemplate authors={authors} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { authors } = await client.request(GET_AUTHORS)

  return { revalidate: 60, props: { authors } }
}
export default AboutUs
