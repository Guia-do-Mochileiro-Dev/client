import { gql } from 'graphql-request'

const GET_POSTS = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  query GET_POSTS {
    postPages {
      id
      cover {
        ...imageData
      }
      title
      text
      slug
    }
  }
`

export default GET_POSTS
