import { ReactNode } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri:
    process.env.GRAPHQL_HOST ||
    'https://guia-do-mochileiro-dev.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

interface IApiProvider {
  children: ReactNode
}

export const ApiProvider = ({ children }: IApiProvider) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default client
