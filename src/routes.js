import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './Pages/Homescreen';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
const AppStack = createStackNavigator();


export default function Routes(){
  
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Tela Incial" component={Homescreen}/>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Signup" component={Signup}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );

}