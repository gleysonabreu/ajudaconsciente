import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import icon from '../../images/Logo_Icon.png';

function WelcomeDoador() {

  const route = useRoute();

  const dataDoador = {
    name: "Gleyson Abreu"
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.headerText}>Ajuda Consciente</Text>
      </View>

      <View style={styles.contentPage}>
        <Text style={styles.headerText}>Olá prezado {dataDoador.name}.</Text>
        <Text style={styles.textLight}>Assim como sua iniciativa partiu da idéia de ajudar ao próximo.
          Nesse momento de pândemia estamos todos juntos para combater esse mal e cuidar das pessoas carentes, 
          e foi pensando nisso que resolvermos criar e espalhar o 
          Projeto "Ajuda Consciente" que visa no auxilio de pessoas carentes e necessitadas que não podem comprar os 
          equipamentos de proteção e prevenção contra a COVID-19.
        </Text>
        <Text style={styles.headerText}>O que vai querer doar hoje?</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>DOAR</Text></TouchableOpacity>
      </View>

    </View>
  );

}

export default WelcomeDoador;