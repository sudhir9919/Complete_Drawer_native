import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './drawer';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Splash" component={SplashScreen} />
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="Home" component={DrawerNavigator} />
     </Stack.Navigator>
     </NavigationContainer>
  );
};

export default AppNavigator;
