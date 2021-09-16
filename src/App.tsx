import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Config from 'react-native-config';
import Router from 'navigation';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://gitlab.com/api/graphql/',
  cache: new InMemoryCache(),
  headers: {Authorization: `Bearer ${Config.GITLAB_TOKEN}`},
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
