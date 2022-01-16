import React from 'react'
import { NextSeo } from 'next-seo'
import { PostsProps, PostProps } from 'types/api'

import * as S from './styles'

import { MainArticle } from 'components/MainArticle'
import { Article } from 'components/Article'

export const HomeTemplate = ({ postPages }: PostsProps) => {
  const lastedPost = postPages[postPages.length - 1]
  const posts = JSON.parse(JSON.stringify(postPages)) as PostsProps
  posts.pop()
  posts.reverse()

  return (
    <>
      <NextSeo
        title="Guia do Mochileiro Dev"
        description="Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D"
        canonical="https://guiadomochileirodev.vercel.app/"
        openGraph={{
          url: 'https://guiadomochileirodev.vercel.app/',
          title: 'Guia do Mochileiro Dev',
          description:
            'Projeto desenvolvido de devs para devs. Nosso intuito é te ajudar a resolver os problemas aos quais nós já passamos e conseguimos resolver :D',
          images: [
            {
              url: 'https://guiadomochileirodev.vercel.app//img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Guia do Mochileiro Dev'
            }
          ],
          site_name: 'Guia do Mochileiro Dev'
        }}
      />
      <S.Container>
        {!!posts.length && (
          <>
            <MainArticle {...lastedPost} />

            <S.Posts>
              {posts.map((post: PostProps) => (
                <Article key={post.id} {...post} />
              ))}
            </S.Posts>
          </>
        )}
      </S.Container>
    </>
  )
}