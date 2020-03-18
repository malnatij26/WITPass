import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Body from 'UI/Body'

export default function App() {
  return (
    <View style={styles.container}>
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
