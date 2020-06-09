import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

function SuccessfulyDoador(){

  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Feather size={100} color={"#FFF"} name="check" />
      <Text style={styles.successText}>OBRIGADO POR FAZER SUA DOAÇÃO!</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('ProductListDoador')}
      style={styles.button}>
        <Text style={styles.textButton}>Ir para lista de doações.</Text>
      </TouchableOpacity>
    </View>
  );

}

export default SuccessfulyDoador;