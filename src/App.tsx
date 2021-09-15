import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const App: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>Hello World</Text>
    </View>
  );
}

export default App;