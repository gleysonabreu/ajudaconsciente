import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './Pages/Homescreen';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import WelcomeDoador from './Pages/WelcomeDoador';
import WelcomeUser from './Pages/WelcomeUser';
import ListItemsUser from './Pages/ListItemsUser';
import CartUser from './Pages/CartUser';
const AppStack = createStackNavigator();


export default function Routes(){
  
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Tela Incial" component={Homescreen}/>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Signup" component={Signup}/>
        <AppStack.Screen name="WelcomeDoador" component={WelcomeDoador}/>
        <AppStack.Screen name="WelcomeUser" component={WelcomeUser}/>
        <AppStack.Screen name="ListItemsUser" component={ListItemsUser} />
        <AppStack.Screen name="CartUser" component={CartUser} />
      </AppStack.Navigator>
    </NavigationContainer>
  );

}