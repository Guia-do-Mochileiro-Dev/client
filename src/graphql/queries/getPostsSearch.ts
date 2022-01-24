import { gql } from 'graphql-request'

const GET_POST_SEARCH = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  query GET_POST_SEARCH($text: String!) {
    postPages(
      where: { _or: [{ text_contains: $text }, { title_contains: $text }] }
    ) {
      id
      cover {
        ...imageData
      }
      created_at
      title
      text
      slug
      author {
        name
        photo {
          ...imageData
        }
      }
    }
  }
`

export default GET_POST_SEARCH
