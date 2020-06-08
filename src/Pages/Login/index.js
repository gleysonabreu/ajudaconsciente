import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

function Login(){
  const route = useRoute();
  const navigation = useNavigation();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin(){
    
    if(cpf == '123456789' && password == '1234'){
      navigation.navigate('WelcomeUser');
    }else if(cpf == '987654321' && password == '1234'){
      navigation.navigate('WelcomeDoador');
    }

  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}><Feather size={25} name="arrow-left" color="#E61610" /></TouchableOpacity>
          <Text style={styles.headerText}>{route.name}</Text>
        </View>
      </View>

     
      <View style={styles.contentPage}>
        <TextInput 
        style={styles.input}
        placeholder={`Digite seu cpf/cpnj`}
        onChangeText={(text) => setCpf(text)}
        defaultValue={cpf}
        />
        <TextInput
        keyboardType="default"
        secureTextEntry={true}
        style={styles.input}
        placeholder={`Digite sua senha`}
        onChangeText={ (text) => setPassword(text)}
        defaultValue={password}
        />
        <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
          <Text style={styles.textButton}>Log In</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default Login;