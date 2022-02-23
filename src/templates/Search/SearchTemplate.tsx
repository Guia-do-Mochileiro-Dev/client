import { PostsProps, ArticleProps } from 'types/api'

import * as S from './styles'

import { Article } from 'components/Article'

export const SearchTemplate = ({ postPages }: PostsProps) => {
  const posts: any = [...postPages]

  return (
    <>
      <S.Container>
        {postPages?.length > 0 && (
          <>
            <S.Title>{postPages?.length} resultados encontrados</S.Title>

            <S.Posts>
              {posts?.map((post: ArticleProps, index: number) => (
                <Article key={`article-${index}`} {...post} />
              ))}
            </S.Posts>
          </>
        )}
        {postPages?.length === 0 && (
          <S.Title>Nenhum artigo encontrado!</S.Title>
        )}
      </S.Container>
    </>
  )
}
