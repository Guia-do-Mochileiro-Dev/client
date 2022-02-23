import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { PostsProps, ArticleProps } from 'types/api'

import InfiniteScroll from 'react-infinite-scroll-component'

import * as S from './styles'

import { MainArticle } from 'components/MainArticle'
import { Article } from 'components/Article'
import MediaMatch from 'components/MediaMatch'

export const HomeTemplate = ({ postPages }: PostsProps) => {
  const lastedPost = !!postPages && (postPages[postPages.length - 1] as any)
  const posts = !!postPages && (JSON.parse(JSON.stringify(postPages)) as any)

  !!postPages && posts.pop()
  !!postPages && posts.reverse()

  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(posts.slice(count.prev, count.next))

  const getMoreData = () => {
    if (current.length === posts.length) {
      setHasMore(false)
      return
    }

    setCurrent(current.concat(posts.slice(count.prev + 10, count.next + 10)))

    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }))
  }

  return (
    <>
      <NextSeo
        title="Guia do Mochileiro Dev"
        description="Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D"
        canonical="https://guiadomochileirodev.netlify.app/"
        openGraph={{
          url: 'https://guiadomochileirodev.netlify.app/',
          title: 'Guia do Mochileiro Dev',
          description:
            'Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D',
          images: [
            {
              url: 'https://guiadomochileirodev.netlify.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Guia do Mochileiro Dev'
            }
          ],
          site_name: 'Guia do Mochileiro Dev'
        }}
      />
      <S.Container>
        {postPages.length > 0 && !!posts && (
          <InfiniteScroll
            dataLength={current.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={<p>Loading...</p>}
          >
            <MediaMatch greaterThan="medium">
              <MainArticle {...lastedPost} />
            </MediaMatch>

            <S.Posts>
              <MediaMatch lessThan="medium">
                <Article {...lastedPost} />
              </MediaMatch>
              {current.map((post: ArticleProps, index: number) => (
                <Article key={`article-${index}`} {...post} />
              ))}
            </S.Posts>
          </InfiniteScroll>
        )}
        {postPages.length === 0 && (
          <S.NotFound>Nenhum artigo publicado!</S.NotFound>
        )}
      </S.Container>
    </>
  )
}
