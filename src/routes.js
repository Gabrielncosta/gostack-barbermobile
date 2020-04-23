import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; */

import SignIn from './pages/SigIn';
import SignUp from './pages/SignUp';

const AppStack = createStackNavigator();
/* const Tab = createBottomTabNavigator(); */

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
      </AppStack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="SignIn" component={SignIn} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
