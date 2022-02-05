import { gql } from '@apollo/client'

const GET_POST_SLUG = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  query GET_POST_SLUG($slug: String!) {
    postPages(where: { slug: $slug }) {
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

export default GET_POST_SLUG
