import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

interface Props {
  width: number,
}

export const Header: React.FC<Props> = ({ width }) => {
  return (
    <View style={[styles.root, { width, height: 120 }]}>
      <Text style={{ color: 'white' }}>Hello World</Text>
    </View>
  )
}