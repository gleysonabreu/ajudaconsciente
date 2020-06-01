import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

function Login(){
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

     
      <View style={styles.contentPage}>
        <TextInput style={styles.input} placeholder={`Digite seu email`} />
        <TextInput keyboardType="default" secureTextEntry={true} style={styles.input} placeholder={`Digite sua senha`} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Log In</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Login;