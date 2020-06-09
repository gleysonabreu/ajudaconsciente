import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import defaultImage from '../../images/default_image.jpg';

function Profile(){

  const navigation = useNavigation();
  const dataUser = {
    name: "Hudson",
    born: "17/05/1999",
    email: "hudson@gmail.com",
    phone: "8587858787",
    password: "1234"
  }
  
  const [name, setName] = useState(dataUser.name);
  const [phone, setPhone] = useState(dataUser.phone);
  const [password, setPassword] = useState(dataUser.password);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}><Feather size={25} name="arrow-left" color="#E61610" /></TouchableOpacity>
          <Text style={styles.headerText}>Perfil</Text>
        </View>
      </View>

      <View style={styles.contentPage}>
        <Image style={{ width: 200, height: 200, borderRadius: 100 }} source={defaultImage} />
        <View>
          <View style={styles.divInputs}>
            <Text style={styles.labelInput}>Nome: </Text>
            <TextInput style={styles.input} onChangeText={text => setName(text)} placeholder={"Digite seu nome"} value={name} />
          </View>
          <View style={styles.divInputs}>
            <Text style={styles.labelInput}>Email: </Text>
            <TextInput editable={false} style={styles.input} placeholder={"Digite seu email"} value={dataUser.email} />
          </View>
          <View style={styles.divInputs}>
            <Text style={styles.labelInput}>Data de nascimento: </Text>
            <TextInput editable={false} style={styles.input} placeholder={"Digite sua data de nascimento"} value={dataUser.born} />
          </View>
          <View style={styles.divInputs}>
            <Text style={styles.labelInput}>Número celular: </Text>
            <TextInput keyboardType="numeric" style={styles.input} onChangeText={text => setPhone(text)} placeholder={"Digite seu número celular"} value={phone} />
          </View>
          <View style={styles.divInputs}>
            <Text style={styles.labelInput}>Senha: </Text>
            <TextInput keyboardType="default" secureTextEntry={true} style={styles.input} placeholder={`Digite sua senha`} onChangeText={text => setPassword(text)} value={password} />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Atualizar dados</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

export default Profile;