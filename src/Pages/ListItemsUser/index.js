import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ToastAndroid, AsyncStorage } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import alcoolgel from '../../images/alcoolgel.jpg';
import arroz from '../../images/arroz.jpg';
import carne from '../../images/carne.jpg';
import feijao from '../../images/feijao.jpg';
import luvas from '../../images/luvas.jpg';
import macarrao from '../../images/macarrao.png';
import mascara from '../../images/mascara.jpg';

function ListItemsUser() {

  const navigation = useNavigation();
  const route = useRoute();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts([
      {
        image: arroz,
        name: "Arroz",
        amount: 1,
        id: 1
      },
      {
        image: alcoolgel,
        name: "Álcool gel",
        amount: 1,
        id: 2
      },
      {
        image: carne,
        name: "Carne",
        amount: 1,
        id: 3
      },
      {
        image: feijao,
        name: "Feijão",
        amount: 1,
        id: 4
      },
      {
        image: luvas,
        name: "Luvas",
        amount: 1,
        id: 5
      },
      {
        image: macarrao,
        name: "Macarrão",
        amount: 1,
        id: 6
      },
      {
        image: mascara,
        name: "Mascara",
        amount: 1,
        id: 7
      }
      
    ]);
  }, []);

  return (
    <MenuProvider>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <Text style={styles.headerText}>Lista de Produtos</Text>
        </View>
        
        <View style={styles.menu}>
          <TouchableOpacity
          style={styles.cart}
          onPress={() => {
            navigation.navigate('CartUser', cart);
          }}
          >
            <Text style={styles.cartText}>{cart.length}<Feather name="shopping-cart" size={16} color="#000"/> </Text>
          </TouchableOpacity>
          <Menu style={{ borderRadius: 16 }}>
            <MenuTrigger><Feather name="more-vertical" size={25} /></MenuTrigger>
            <MenuOptions style={styles.menuList}>
              <MenuOption style={styles.menuItem} onSelect={() => navigation.navigate("ListItemsUser")}>
                <Feather name="home" size={15} />
                <Text style={styles.textMenu}>Inicio</Text>
              </MenuOption>
              <MenuOption style={styles.menuItem} onSelect={() => navigation.navigate("ProductList")}>
                <Feather name="list" size={15} />
                <Text style={styles.textMenu}>Pedidos</Text>
              </MenuOption>
              <MenuOption style={styles.menuItem} onSelect={() => navigation.navigate("Profile")}>
                <Feather name="user" size={15} />
                <Text style={styles.textMenu}>Meu Perfil</Text>
              </MenuOption>
              <MenuOption style={styles.menuItem} onSelect={() => navigation.navigate("Tela Incial")}>
                <Feather name="log-out" size={15} />
                <Text style={styles.textMenu}>Sair</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>

      </View>

      <View style={styles.contentPage}>
        <FlatList style={styles.productList}
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item: product}) => (
            <View key={product.id} style={styles.product}>
              <Text style={styles.productName}>Produto: {product.name}</Text>
              <Image style={styles.productImage} source={product.image} />
              <TouchableOpacity
              style={styles.button}
              onPress={() => {

                if(cart.find(it => it.id == product.id)){
                  cart.find(it => it.id == product.id).amount += 1;
                  ToastAndroid.showWithGravity(`${product.name} teve sua quantidade modificada.`,
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM);
                }else{
                  setCart([...cart, product]);
                  ToastAndroid.showWithGravity(`${product.name} adicionado no carrinho!`,
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM);
                }

              }}
              >
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

    </View>
    </MenuProvider>
  );
}

export default ListItemsUser;