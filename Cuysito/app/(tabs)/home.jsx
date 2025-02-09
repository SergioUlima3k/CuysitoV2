import { View, Text } from 'react-native'
import React from 'react'
import HeaderCuyo from '../../componentes/home/HeaderCuyo'
import BodyCuyo from '../../componentes/body/BodyCuyo'

export default function Homesito() {
  
  return (
    <View style={{
      flex: 1, // Ocupa toda la pantalla
      backgroundColor: '#746397',
    }}>
    <HeaderCuyo/>
    <BodyCuyo/>
      
    </View>
  )
}