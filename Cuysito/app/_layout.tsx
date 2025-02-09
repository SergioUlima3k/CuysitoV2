import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
export default function RootLayout() {
    useFonts({
        'poppins':require('../assets/fonts/Poppins-Regular.ttf'),
        'poppinsM':require('../assets/fonts/Poppins-Medium.ttf'),
        'poppinsB':require('../assets/fonts/Poppins-Bold.ttf'),
        'poppinsBlack':require('../assets/fonts/Poppins-Black.ttf'),
      })
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "(tabs)"/>
    </Stack>
    
  )
}