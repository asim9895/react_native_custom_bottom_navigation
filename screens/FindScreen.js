import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FindScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Find Screen</Text>
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1015',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
