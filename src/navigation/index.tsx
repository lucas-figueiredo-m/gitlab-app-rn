import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';

import { RootRoutes } from "navigation/config/routes";
import React from 'react';

import SplashScreen from 'screens/SplashScreen';
import TabNavigator from './navigators/TabNavigator';

export type RootStackParamList = {
  [RootRoutes.SPLASH_SCREEN]: undefined,
  [RootRoutes.TAB_NAVIGATOR]: undefined
}


export type SplashNavigationProp = StackNavigationProp<
  RootStackParamList,
  RootRoutes.SPLASH_SCREEN
>

const RootStack = createStackNavigator<RootStackParamList>();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
          gestureEnabled: false
        }}
      >
        <RootStack.Screen name={RootRoutes.SPLASH_SCREEN} component={SplashScreen} />
        <RootStack.Screen name={RootRoutes.TAB_NAVIGATOR} component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Router;