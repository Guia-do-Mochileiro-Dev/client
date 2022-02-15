import { PostsProps, PostProps } from 'types/api'

import * as S from './styles'

import { Article } from 'components/Article'

export const SearchTemplate = ({ postPages }: PostsProps) => (
  <>
    <S.Container>
      {postPages?.length > 0 && (
        <>
          <S.Title>{postPages?.length} resultados encontrados</S.Title>

          <S.Posts>
            {postPages?.map((post: PostProps) => (
              <Article key={post.id} {...post} />
            ))}
          </S.Posts>
        </>
      )}
      {postPages?.length === 0 && <S.Title>Nenhum artigo encontrado!</S.Title>}
    </S.Container>
  </>
)
