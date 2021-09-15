import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Screen from './screens/AuthScreen';
import Config from 'react-native-config';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://gitlab.com/api/graphql/',
  cache: new InMemoryCache(),
  headers: {Authorization: `Bearer ${Config.GITLAB_TOKEN}`},
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Screen />
    </ApolloProvider>
  );
};

export default App;
