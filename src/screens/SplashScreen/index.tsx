import React, { useEffect } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { SVG } from 'components/common';
import Logo from 'img/logos/logo1.svg';
import { useNavigation } from '@react-navigation/core';
import { RootRoutes } from 'navigation/config/routes';
import { SplashNavigationProp } from 'navigation';

const SplashScreen: React.FC = () => {

  const { reset } = useNavigation<SplashNavigationProp>();

  useEffect( () => {

    setTimeout(() => {
      reset({
        index: 0,
        routes: [{ name: RootRoutes.TAB_NAVIGATOR }]
      })
    }, 4000);
  }, [])
  return (
    <View style={styles.root}>
      <SVG xml={Logo} />
    </View>
  )
}

export default SplashScreen