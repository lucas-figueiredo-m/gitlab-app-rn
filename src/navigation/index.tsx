import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { RootRoutes } from "navigation/config/routes";
import React from 'react';

import AuthScreen from 'screens/AuthScreen';
import SplashScreen from 'screens/SplashScreen';

export type RootStackParamList = {
  [RootRoutes.SPLASH_SCREEN]: undefined,
  [RootRoutes.AUTH_SCREEN]: undefined
}

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
        <RootStack.Screen name={RootRoutes.AUTH_SCREEN} component={AuthScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Router;