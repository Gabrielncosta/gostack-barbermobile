import React from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SigIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const Signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={Signed ? 'Home' : 'SignIn'}
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
