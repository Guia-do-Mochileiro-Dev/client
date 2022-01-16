import { gql } from 'graphql-request'

const GET_POST_ID = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  query GET_POST_ID($id: ID!) {
    postPage(id: $id) {
      id
      cover {
        ...imageData
      }
      created_at
      title
      text
      slug
    }
  }
`

export default GET_POST_ID
