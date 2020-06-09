import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

function Endereco(){
  const navigation = useNavigation();
  const route = useRoute();

  const [cart, setCart] = useState([]);

  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [celular, setCelular] = useState('');
  const [referencia, setReferencia] = useState('');

  useEffect(() => {
    setCart(route.params);
  }, []);

  const handleBuy = () => {

    navigation.navigate("Successfuly");
        
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBack}>
          <TouchableOpacity onPress={() => navigation.goBack()}><Feather size={25} name="arrow-left" color="#E61610" /></TouchableOpacity>
          <Text style={styles.headerText}>Endereço</Text>
        </View>
      </View>

      <View style={styles.contentPage}>

      <Text style={styles.titleCart}>Informe seus dados para entrega.</Text>
        <TextInput
        onChangeText={text => setEndereco(text)}
        style={styles.input}
        placeholder="Informe sua rua/avenida" />
        <TextInput
        keyboardType="numeric"
        onChangeText={text => setNumero(text)}
        style={styles.input}
        placeholder="Informe o número da sua casa" />
        <TextInput
        onChangeText={text => setBairro(text)}
        style={styles.input}
        placeholder="Informe seu bairro" />
        <TextInput
        onChangeText={text => setCidade(text)}
        style={styles.input}
        placeholder="Informe sua cidade" />
        <TextInput
        keyboardType="numeric"
        onChangeText={text => setCep(text)}
        style={styles.input}
        placeholder="Informe seu cep" />
        <TextInput
        keyboardType="numeric"
        onChangeText={text => setCelular(text)}
        style={styles.input}
        placeholder="Informe seu telefone celular" />
        <TextInput
        onChangeText={text => setReferencia(text)}
        style={styles.input}
        placeholder="Informe um ponto de refência" />
        <TouchableOpacity
        onPress={() => handleBuy()}
        style={styles.button}>
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Endereco;