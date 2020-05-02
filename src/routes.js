import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SigIn';
import SignUp from './pages/SignUp';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function New() {
  return (
    <AppStack.Navigator
      unmountOnBlur
      screenOptions={{
        unmountOnBlur: true,
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <AppStack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Selecione o prestador',
          headerTitleAlign: 'center',
        }}
      />
      <AppStack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Selecione o horário',
        }}
      />
      <AppStack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirmar agendamento',
          headerTitleAlign: 'center',
        }}
      />
    </AppStack.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator
      unmountOnBlur
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#8d41a8',
          borderTopColor: '#8d41a8',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: () => <Icon name="event" size={20} color="#fff" />,
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        unmountOnBlur
        options={{
          unmountOnBlur: true,
          tabBarVisible: false,
          tabBarLabel: 'Agendar',
          tabBarIcon: () => (
            <Icon name="add-circle-outline" size={20} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => <Icon name="person" size={20} color="#fff" />,
        }}
      />
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
