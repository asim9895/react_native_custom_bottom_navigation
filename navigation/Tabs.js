import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import FindScreen from '../screens/FindScreen';
import PostScreen from '../screens/PostScreen';
import SettingScreen from '../screens/SettingScreen';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const CustomTabFindButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#181D2A',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          elevation: 0,
          marginHorizontal: 10,
          bottom: 10,
          borderRadius: 20,
          backgroundColor: '#161D27',
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign
                name='home'
                size={24}
                color='black'
                style={{ color: focused ? '#BD7E53' : '#555763' }}
              />
              <Text style={{ color: focused ? '#BD7E53' : '#555763' }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='chat'
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo
                name='chat'
                size={24}
                color='black'
                style={{ color: focused ? '#BD7E53' : '#555763' }}
              />

              <Text style={{ color: focused ? '#BD7E53' : '#555763' }}>
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='find'
        component={FindScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name='search1' size={24} color='#BD7E53' />
          ),
          tabBarButton: (props) => <CustomTabFindButton {...props} />,
        }}
      />
      <Tab.Screen
        name='post'
        component={PostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign
                name='setting'
                size={24}
                color='black'
                style={{ color: focused ? '#BD7E53' : '#555763' }}
              />

              <Text style={{ color: focused ? '#BD7E53' : '#555763' }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='setting'
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign
                name='database'
                size={24}
                color='black'
               style={{ color: focused ? '#BD7E53' : '#555763' }}
              />

              <Text style={{ color: focused ? '#BD7E53' : '#555763' }}>
                Posts
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.25,
    elevation: 5,
  },
});
