import { View, Text, Platform } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const _layout = () => {
  return (
    <Tabs 
  style={{ paddingTop: 40 }}
  screenOptions={{
    headerShown: false,
    tabBarStyle: { 
      backgroundColor: '#2C2242', 
      paddingBottom: 40,
      height: 110,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      margin: 0,
      paddingLeft: 40,
      flexDirection: 'row',  
      justifyContent: 'space-evenly', 
      gap: 20, 
    },
    tabBarIconStyle: {
      marginBottom: 2, 
      paddingTop: 0, 
    },
    tabBarBackground: () => <View style={{ backgroundColor: '#2C2242', flex: 1 }} />,
  }}
>
  <Tabs.Screen 
    name="home" 
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome6 name="brain" size={25} color="#EF9D19" />
      ),
    }}
  />
  <Tabs.Screen 
    name="cuni" 
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome6 name="frog" size={25} color="#EF9D19" />
      ),
    }}
  />
  <Tabs.Screen 
    name="ranking" 
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome6 name="ranking-star" size={25} color="#EF9D19" />
      ),
    }}
  />
  <Tabs.Screen 
    name="report" 
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome6 name="file-lines" size={25} color="#EF9D19" />
      ),
    }}
  />
  <Tabs.Screen 
    name="perfil" 
    options={{
      tabBarIcon: ({ color, size }) => (
        <FontAwesome6 name="spaghetti-monster-flying" size={25} color="#EF9D19" />
      ),
    }}
  />
  <Tabs.Screen
        name="simulacrosnew"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="spaghetti-monster-flying" size={25} color="#EF9D19" />
          ),
          tabBarButton: () => null, 
          tabBarStyle: {
            display: 'none', 
          },
        }}
      />
</Tabs>

  );
};

export default _layout;
