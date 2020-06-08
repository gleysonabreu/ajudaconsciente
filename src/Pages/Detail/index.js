import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

function Detail(){

  const navigation = useNavigation();
  const route = useRoute();
  const { products } = route.params;

  const [product, setProduct] = useState(products[0]);

  return(
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}><Feather size={25} name="arrow-left" color="#E61610" /></TouchableOpacity>
            <Text style={styles.headerText}>Meu pedido</Text>
          </View>
        </View>

        <View style={styles.contentPage}>
          <View style={styles.pageDiv}>
            <Feather name="shopping-bag" color="#73c300" size={35}/>
            <View style={styles.pageDivColumn}>
              <Text style={styles.pageDivColumnTitle}>Nº do pedido</Text>
              <Text style={styles.npedido}>#2551525</Text>
              </View>
            <View style={styles.pageDivColumn}>
              <Text style={styles.pageDivColumnTitle}>Data:</Text>
              <Text style={styles.datepedido}>10/05/2020 10:20:51</Text>
              </View>
          </View>
            <Text style={styles.titleEntryDiv}>DADOS DO CLIENTE</Text>

          <View style={styles.pageDiv}>
            <Feather name="user" color="#73c300" size={35}/>
            <View style={styles.pageDivColumn}>
              <Text style={styles.pageDivColumnTitle}>{product.buyersData.name}</Text>
              <Text style={styles.datepedido}>{product.buyersData.email}</Text>
              <Text style={styles.datepedido}>CPF: {product.buyersData.cpf}</Text>
            </View>
            <View></View>
          </View>
            <Text style={styles.titleEntryDiv}>DADOS ENTREGA</Text>
          <View style={styles.pageDiv}>
            <Feather name="map-pin" color="#73c300" size={35}/>
            <View style={styles.pageDivColumn}>
              <Text style={styles.pageDivColumnTitle}>{product.location.endereco}, {product.location.numero}</Text>
              <Text style={styles.datepedido}>Bairro: {product.location.bairro}</Text>
              <Text style={styles.datepedido}>Cidade: {product.location.cidade}</Text>
              <Text style={styles.datepedido}>CEP: {product.location.cep}</Text>
              <Text style={styles.datepedido}>Celular: {product.location.celular}</Text>
              <Text style={styles.datepedido}>Ponto de refêrencia: {product.location.referencia}</Text>
            </View>
            <View></View>
          </View>
            <Text style={styles.titleEntryDiv}>ITENS DO PEDIDO</Text>
          <View style={styles.pageDiv}>
            <Feather name="shopping-cart" color="#73c300" size={35}/>
            <View style={styles.pageDivColumn}>
              {product.cart.map(item => (
                <View key={item.id}>
                  <Text style={styles.datepedido}>{item.name}, quantidade: <Text style={styles.txtKg}>{item.amount}x</Text></Text>
                </View>
              ))}
            </View>
            <View></View>
          </View>

            <Text style={styles.titleEntryDiv}>FLUXO DO PEDIDO</Text>
          <View style={styles.pageFlux}>
            <Feather name="truck" color="#ff5800" size={35}/>
            <View style={styles.pageDivColumn}>
              {product.truck.map(item => (
                <View style={styles.pageDivColumn} key={item.id}>
                  <Text style={styles.pageDivColumnTitle}>
                    {item.date}
                  </Text>
                  <Text style={styles.txtFluxo}>{item.action}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Detail;