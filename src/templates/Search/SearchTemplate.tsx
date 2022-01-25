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
    postPages.slice(count.prev, count.next)
  )

  const getMoreData = () => {
    if (current.length === postPages.length) {
      setHasMore(false)
      return
    }

    setCurrent(
      current.concat(postPages.slice(count.prev + 10, count.next + 10))
    )

    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10
    }))
  }

  return (
    <>
      <S.Container>
        <S.Title>{postPages.length} resultados encontrados</S.Title>
        {!!postPages && (
          <InfiniteScroll
            dataLength={postPages.length}
            next={getMoreData}
            hasMore={hasMore}
          >
            <S.Posts>
              {current.map((post: PostProps) => (
                <Article key={post.id} {...post} />
              ))}
            </S.Posts>
          </InfiniteScroll>
        )}
        {!postPages && <S.Title>Nenhum post encontrado!</S.Title>}
      </S.Container>
    </>
  )
}
