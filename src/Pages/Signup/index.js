import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import eating_together from '../../images/eating_together.png';
import styles from './styles';

function Signup(){
  const route = useRoute();
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}><Feather size={25} name="arrow-left" color="#E61610" /></TouchableOpacity>
          <Text style={styles.headerText}>{route.name}</Text>
        </View>
      </View>

      <ScrollView>
      <View style={styles.contentPage}>
        <Image style={styles.eating} source={eating_together} />
        <TextInput style={styles.input} placeholder={`Digite seu nome completo`} />
        <TextInput style={styles.input} placeholder={`Digite seu email`} />
        <TextInput keyboardType="default" secureTextEntry={true} style={styles.input} placeholder={`Digite sua senha`} />
        <TextInput style={styles.input} placeholder={`Digite seu cpf/cnpj`} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

    </View>
  );
}

export default Signup;