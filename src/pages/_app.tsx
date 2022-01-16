import type { AppProps } from 'next/app'
import Head from 'next/head'

import Theme from 'themes'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Head>
          <title>Guia do Mochileiro Dev</title>
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <meta
            name="description"
            content="Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </>
  )
}

export default App
