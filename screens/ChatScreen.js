import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Chat Screen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1015',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
