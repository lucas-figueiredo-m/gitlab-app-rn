import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { SVG } from 'components/common';
import Logo from 'img/logos/logo1.svg';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <SVG xml={Logo} />
    </View>
  )
}

export default SplashScreen