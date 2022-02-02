import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import Theme from 'themes'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { JokePhrasesContextProvider } from 'hooks/useJokePhrases'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Head>
          <title>Guia do Mochileiro Dev</title>
          <link rel="apple-touch-icon" href="/img/logo-branca.svg" />
          <link rel="shortcut icon" href="/img/logo-branca.svg" />
          <meta
            name="description"
            content="Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D"
          />
        </Head>
        <NextNprogress
          color="#D9525E"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
        />
        <Header />
        <Component {...pageProps} />
        <JokePhrasesContextProvider>
          <Footer />
        </JokePhrasesContextProvider>
      </Theme>
    </>
  )
}

export default App
