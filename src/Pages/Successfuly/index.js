import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

function Successfuly(){

  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Feather size={100} color={"#FFF"} name="check" />
      <Text style={styles.successText}>COMPRA REALIZADA</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('ProductList')}
      style={styles.button}>
        <Text style={styles.textButton}>Ir para lista de compras</Text>
      </TouchableOpacity>
    </View>
  );

}

export default Successfuly;