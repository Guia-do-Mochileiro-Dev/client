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
  console.log(current.length)
  console.log(postPages?.length)
  const getMoreData = () => {
    console.log(`bbbb`)
    if (current.length == postPages.length) {
      console.log(`aaaaa`)
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
        <S.Title>{postPages?.length} resultados encontrados</S.Title>
        {!!postPages && (
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
        )}
        {!postPages && <S.Title>Nenhum post encontrado!</S.Title>}
      </S.Container>
    </>
  )
}
