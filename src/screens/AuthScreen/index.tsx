import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {gql, useQuery} from '@apollo/client';

const GET_USER_DATA = gql`
  query {
    currentUser {
      id
      name
    }
  }
`;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

const Screen: React.FC = () => {
  const User = () => {
    const {loading, error, data} = useQuery(GET_USER_DATA);

    if (loading) {
      return <ActivityIndicator size="large" color="blue" />;
    }
    if (error) {
      return <Text>{`Error! --> ${error.message}`}</Text>;
    }

    return (
      <View>
        <Text>{data.currentUser.id}</Text>
        <Text>{data.currentUser.name}</Text>
      </View>
    );
  };

  return <View style={styles.root}>{User()}</View>;
};

export default Screen;
