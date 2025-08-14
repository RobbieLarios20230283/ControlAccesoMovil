import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Dashboard from "../screens/DashboardScreen";
import Permissions from '../screens/PermitsScreen';
import Access from '../screens/AccessesScreen';
import Profile from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#AF8260',
        tabBarInactiveTintColor: '#B99873',
        tabBarStyle: {
          backgroundColor: '#2A2F43',
          height: Platform.OS === 'ios' ? 70 + insets.bottom : 60 + insets.bottom,
          borderTopWidth: 0,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8, // añade espacio extra en Android
          paddingTop: 5,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          marginTop: 0,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case 'Dashboard':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Permissions':
              iconName = focused ? 'clipboard' : 'clipboard-outline';
              break;
            case 'Access':
              iconName = focused ? 'lock-closed' : 'lock-closed-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse';
          }
          return <Ionicons name={iconName} color={color} size={24} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Permissions" component={Permissions} options={{ title: 'Permisos' }} />
      <Tab.Screen name="Access" component={Access} options={{ title: 'Accesos' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
