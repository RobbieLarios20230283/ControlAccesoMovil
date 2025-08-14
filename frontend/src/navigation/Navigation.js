import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../screens/SplashScreen';
import Login from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';

import { AuthContext } from '../context/AuthContext';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const { authToken, loading } = useContext(AuthContext);

  // Mientras carga el estado de autenticación mostramos Splash
  if (loading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!authToken ? (
          // Usuario no autenticado → va al Login
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          // Usuario autenticado → va al TabNavigator
          <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
