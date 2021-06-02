import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FindScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Find Screen</Text>
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#042213',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
