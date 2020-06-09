import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ToastAndroid} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import styles from './styles';

function CartDoador() {
  const route = useRoute();
  const navigation = useNavigation();
  const [cart, setCart] = useState(route.params);


  const handleAddAmount = (product_id) => {

    cart.find(product => product.id == product_id).amount += 1;
    setCart([...cart]);

  }

  const handleRemoveAmount = (product_id) => {
    
    if(cart.find(product => product.id == product_id).amount == 1){

      cart.find(product => product.id == product_id).amount -= 1;
      const remove = cart.filter((item) => item.id !== product_id);
      setCart([...remove]);

      ToastAndroid.showWithGravity(`Produto removido.`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM);
    }else{
      cart.find(product => product.id == product_id).amount -= 1;
      setCart([...cart]);
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <TouchableOpacity onPress={() => navigation.navigate("ListItemDoador")}><Feather size={25} name="arrow-left" color="#E61610" /></TouchableOpacity>
          <Text style={styles.headerText}>Carrinho</Text>
        </View>
      </View>

      <View style={styles.contentPage}>

        <Text style={styles.titleCart}>Verifique os produtos que você selecionou.</Text>

        <FlatList
        style={styles.productList}
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={product => String(product.id)}
        renderItem={({ item: product }) => (
          <View key={product.id} style={styles.product}>
            <Image style={styles.productImage} source={product.image} />
            <View style={styles.groupCart}>
              <Text style={styles.productText}>{product.name}</Text>
              <Text>Quantidade: {product.amount}</Text>
            </View>
              <View style={styles.action}>
                <TouchableOpacity onPress={() => handleAddAmount(product.id)}><Feather color="#E61610" size={20} name="plus" /></TouchableOpacity>
                <TouchableOpacity onPress={() => handleRemoveAmount(product.id)}><Feather color="#E61610" size={20} name="minus" /></TouchableOpacity>
              </View>
          </View>
        )}
        />
          <TouchableOpacity
          onPress={() => navigation.navigate('EnderecoDoador', cart)}
          style={styles.button}>
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default CartDoador;