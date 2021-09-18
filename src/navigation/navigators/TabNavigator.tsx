import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, SVG } from 'components/common';
import { TabRoutes } from 'navigation/config/routes';
import React from 'react';
import DashboardScreen from 'screens/Dashboard';
import house from 'img/icons/house.svg'
import search from 'img/icons/search.svg'
import menu from 'img/icons/menu.svg'
import { Colors } from 'styles';

export type TabParamList = {
  [TabRoutes.DASHBOARD]: undefined,
  [TabRoutes.SEARCH_SCREEN]: undefined,
  [TabRoutes.MENU_SCREEN]: undefined,
}

const Tab = createBottomTabNavigator<TabParamList>();

const TabIcon = {
  [TabRoutes.DASHBOARD]: house,
  [TabRoutes.SEARCH_SCREEN]: search,
  [TabRoutes.MENU_SCREEN]: menu,
}

interface TabIconProps {
  route: TabRoutes,
  focused?: boolean,
  color?: string,
  size?: number
}

const RenderIcon: React.FC<TabIconProps> = ({ route, color }) => (
  <SVG xml={TabIcon[route]} color={color} />
)

const TabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      header: (props) => <Header width={props.layout.width} />,
      tabBarStyle: { backgroundColor: Colors.Primary },
      tabBarActiveTintColor: Colors.Terciary,
      tabBarInactiveTintColor: Colors.White,
    }}
  >
    <Tab.Screen
      name={TabRoutes.DASHBOARD}
      component={DashboardScreen}
      options={{
        tabBarIcon: (props) => <RenderIcon route={TabRoutes.DASHBOARD} color={props.color} />
      }}
    />

    <Tab.Screen
      name={TabRoutes.SEARCH_SCREEN}
      component={DashboardScreen}
      options={{
        tabBarIcon: (props) => <RenderIcon route={TabRoutes.SEARCH_SCREEN} color={props.color} />
      }}
    />

    <Tab.Screen
      name={TabRoutes.MENU_SCREEN}
      component={DashboardScreen}
      options={{
        tabBarIcon: (props) => <RenderIcon route={TabRoutes.MENU_SCREEN} color={props.color} />
      }}
    />
  </Tab.Navigator>
)

export default TabNavigator;