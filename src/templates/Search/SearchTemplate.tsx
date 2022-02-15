import { useState } from 'react'
import { PostsProps, PostProps } from 'types/api'

import InfiniteScroll from 'react-infinite-scroll-component'

import * as S from './styles'

import { Article } from 'components/Article'

export const SearchTemplate = ({ postPages }: PostsProps) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  const [hasMore, setHasMore] = useState(true)
  const [current, setCurrent] = useState(
    postPages?.slice(count.prev, count.next)
  )

  const getMoreData = () => {
    if (current.length == postPages.length) {
      setHasMore(false)
      return
    }

    setCurrent(
      current.concat(postPages?.slice(count.prev + 10, count.next + 10))
    )

    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }))
  }

  return (
    <>
      <S.Container>
        {postPages?.length > 0 && (
          <>
            <S.Title>{postPages?.length} resultados encontrados</S.Title>
            <InfiniteScroll
              dataLength={current.length}
              next={getMoreData}
              hasMore={hasMore}
              loader={<p>Loading...</p>}
            >
              <S.Posts>
                {current?.map((post: PostProps) => (
                  <Article key={post.id} {...post} />
                ))}
              </S.Posts>
            </InfiniteScroll>
          </>
        )}
        {postPages?.length === 0 && (
          <S.Title>Nenhum artigo encontrado!</S.Title>
        )}
      </S.Container>
    </>
  )
}
