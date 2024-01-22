import React from 'react';  
import {SafeAreaView} from 'react-native';
import Signin from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';

const Index = () => {
 
  const Stack = createNativeStackNavigator()

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Splash} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='SignIn' component={Signin} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)};

export default Index; 