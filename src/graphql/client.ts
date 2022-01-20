import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  process.env.GRAPHQL_HOST || 'http://localhost:1337/graphql'
)

export default client
