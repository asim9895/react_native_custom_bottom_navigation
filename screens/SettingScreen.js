import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Settting Screen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1015',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
