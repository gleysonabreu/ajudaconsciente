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
        date: '08/06/2020 10:56:10',
        buyersData: {
          name: "Hudson",
          email: "hudson@gmail.com",
          cpf: 123456789,
        },
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
            amount: 5,
            id: 1
          },
        ],
        truck: [
          {
            id: 1,
            date: '08/06/2020 11:01:10',
            action: "APROVADO"
          },
          {
            id: 2,
            date: '08/06/2020 13:56:10',
            action: "SEPRADO PELO ESTOQUE"
          },
          {
            id: 3,
            date: '08/06/2020 15:50:00',
            action: "ENTREGUE A TRANSPORTADORA"
          },
          {
            id: 4,
            date: '09/06/2020 10:00:00',
            action: "EM ROTA DE ENTREGA"
          },
          {
            id: 5,
            date: '09/06/2020 17:50:55',
            action: "ENTREGUE"
          }
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
              <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {products})}
              style={styles.button}><Text style={styles.buttonText}>Ver detalhes</Text></TouchableOpacity>
            </View>
          )}
          />
        </View>
     </View>
  );
}

export default ProductList;