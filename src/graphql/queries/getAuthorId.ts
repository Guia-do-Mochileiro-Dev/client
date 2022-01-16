import { gql } from 'graphql-request'

const GET_AUTHOR_ID = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  query GET_AUTHOR_ID($id: ID!) {
    author(id: $id) {
      id
      name
      photo {
        ...imageData
      }
      role
      description
      socialLinks {
        title
        url
      }
    }
  }
`

export default GET_AUTHOR_ID
