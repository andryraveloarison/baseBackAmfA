import { View, Text } from 'react-native'
import React from 'react'

const HomeHeader = ({titre}) => {
  return (
    <View>
      <Text>{titre} </Text>
    </View>
  )
}

export default HomeHeader