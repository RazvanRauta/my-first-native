import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Natives!</Text>
    </View>
  );
};

export default App;
