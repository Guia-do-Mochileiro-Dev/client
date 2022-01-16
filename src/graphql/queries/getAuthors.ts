import { gql } from 'graphql-request'

const GET_AUTHORS = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  query GET_AUTHORS {
    authors {
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

export default GET_AUTHORS
