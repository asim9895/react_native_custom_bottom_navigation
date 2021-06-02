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
          backgroundColor: 'crimson',
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
          backgroundColor: '#ffffff',
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
                style={{ color: focused ? '#e32f45' : '#748c94' }}
              />
              <Text style={{ color: focused ? '#e32f45' : '#748c94' }}>
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
                style={{ color: focused ? '#e32f45' : '#748c94' }}
              />

              <Text style={{ color: focused ? '#e32f45' : '#748c94' }}>
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
            <AntDesign name='search1' size={24} color='white' />
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
                style={{ color: focused ? '#e32f45' : '#748c94' }}
              />

              <Text style={{ color: focused ? '#e32f45' : '#748c94' }}>
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
                style={{ color: focused ? '#e32f45' : '#748c94' }}
              />

              <Text style={{ color: focused ? '#e32f45' : '#748c94' }}>
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
