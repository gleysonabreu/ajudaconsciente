import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import arroz from '../../images/arroz.jpg';
function ProductList(){

  const navigation = useNavigation();
  const route = useRoute();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        idBuy: 2,
        location: {
          endereco: "Rua V",
          numero: 123,
          bairro: "Barra do Ceará",
          cidade: "Fortaleza",
          cep: 61631050,
          celular: 85997507271,
          referencia: "MG MADEIRAS"
        },
        cart: [
          {
            image: arroz,
            name: "Arroz",
            amount: 1,
            id: 1
          },
        ]
      }
    ]);
  }, []);

  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerBack}>
          <TouchableOpacity onPress={() => navigation.navigate("ListItemsUser")}><Feather size={25} name="arrow-left" color="#E61610" /></TouchableOpacity>
          <Text style={styles.headerText}>Lista de compras</Text>
        </View>
      </View>
      
        <View style={styles.contentPage}>
          <FlatList
          style={styles.productList}
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={product => String(product.idBuy)}
          renderItem={({ item: product }) => (
            <View style={styles.product}>
              <Text><Text style={styles.text}>ID da compra:</Text> <Text style={styles.textId}>{product.idBuy}</Text></Text>
              <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Ver detalhes</Text></TouchableOpacity>
            </View>
          )}
          />
        </View>
     </View>
  );
}

export default ProductList;