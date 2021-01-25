import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(link),
  cache: cache,
});

export default client;
