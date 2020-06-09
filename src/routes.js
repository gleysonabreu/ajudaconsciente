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
import Endereco from './Pages/Endereco';
import ProductList from './Pages/ProductList';
import Detail from './Pages/Detail';
import Successfuly from './Pages/Successfuly';
import Profile from './Pages/Profile';
import ListItemDoador from './Pages/ListItemDoador';
import CartDoador from './Pages/CartDoador';
import EnderecoDoador from './Pages/EnderecoDoador';
import SuccessfulyDoador from './Pages/SuccessfulyDoador';
import ProductListDoador from './Pages/ProductListDoador';
import DetailDoador from './Pages/DetailDoador';
import ProfileDoador from './Pages/ProfileDoador';
const AppStack = createStackNavigator();


export default function Routes(){
  
  return(
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Tela Incial" screenOptions={{ headerShown: false }}>
        {/* ROUTES PARA TODOS OS USUÁRIOS */}
        <AppStack.Screen name="Tela Incial" component={Homescreen}/>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Signup" component={Signup}/>
        {/* ROUTES PARA USUÁRIO CLIENTE */}
        <AppStack.Screen name="WelcomeUser" component={WelcomeUser}/>
        <AppStack.Screen name="ListItemsUser" component={ListItemsUser} />
        <AppStack.Screen name="CartUser" component={CartUser} />
        <AppStack.Screen name="Endereço" component={Endereco} />
        <AppStack.Screen name="ProductList" component={ProductList} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="Successfuly" component={Successfuly} />
        {/* ROUTES PARA DOADOR */}
        <AppStack.Screen name="WelcomeDoador" component={WelcomeDoador}/>
        <AppStack.Screen name="ListItemDoador" component={ListItemDoador}/>
        <AppStack.Screen name="CartDoador" component={CartDoador}/>
        <AppStack.Screen name="EnderecoDoador" component={EnderecoDoador}/>
        <AppStack.Screen name="SuccessfulyDoador" component={SuccessfulyDoador}/>
        <AppStack.Screen name="ProductListDoador" component={ProductListDoador}/>
        <AppStack.Screen name="DetailDoador" component={DetailDoador}/>
        <AppStack.Screen name="ProfileDoador" component={ProfileDoador}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );

}