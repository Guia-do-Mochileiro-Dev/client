import { ReactNode } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.GRAPHQL_HOST || 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

interface IApiProvider {
  children: ReactNode
}

export const ApiProvider = ({ children }: IApiProvider) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default client
