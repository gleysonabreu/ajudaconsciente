import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './styles';
import icon from '../../images/Logo_Icon.png';

function Homescreen(){
  const route = useRoute();
  const navigation = useNavigation();
  return(
    <View style={styles.container} >
      <View style={styles.header}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.headerText}>Ajuda Consciente</Text>
      </View>

      <View style={styles.contentPage}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Signup')}
      style={styles.button}>
          <Text style={styles.textButton}>Usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={styles.button}>
          <Text style={styles.textButton}>Doador</Text>
        </TouchableOpacity>
        <View style={styles.menuLogin}>
        <Text>Já tem um conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.loginText}>Faça login</Text></TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default Homescreen;