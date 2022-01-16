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

export default GET_POSTS