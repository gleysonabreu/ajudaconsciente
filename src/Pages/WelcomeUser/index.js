import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import icon from '../../images/Logo_Icon.png';

function WelcomeUser() {

  const route = useRoute();
  const navigation = useNavigation();

  const dataUser = {
    name: "Hudson"
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.headerText}>Ajuda Consciente</Text>
      </View>
      <View style={styles.contentPage}>
      <Text style={styles.headerText} >Olá prezado, {dataUser.name}.</Text>
      <Text style={styles.textLight}>
          Diversas outras pessoas não tem corangem de pedir ajudar ao próximo, e devido a esse momento de pândemia estamos todos juntos para combater esse mal e cuidar das pessoas carentes e necessitadas que precisam de ajuda agora mais do que nunca.
          E foi pensando nisso que resolvemos criar o Projeto "Ajuda Consciente" que visa na doação de equipamentos como luvas, alcool em gel, mascara, produtos alimentares, para as pessoas mais necessitadas que não podem comprar esses equipamentos de prevenção contra a COVID-19.
        </Text>
        <Text style={styles.headerText}>O que você precisa hoje?</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ListItemsUser')}
        ><Text style={styles.buttonText}>PEDIR</Text></TouchableOpacity>
      </View>

    </View>
  );

}

export default WelcomeUser;