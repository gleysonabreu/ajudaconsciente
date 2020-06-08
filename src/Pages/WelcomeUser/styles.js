import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#FFF"
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 5
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 5,
    color: "#FFF"
  },
  headerBack: {
    flexDirection: "row",
    alignItems: "center"
  },
  contentPage: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },

  textLight: {
    fontSize: 22,
    color: "#333333",
    textAlign: 'center'
  },

  button:{
    backgroundColor: '#E61610',
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    marginTop: 30,
  },

  icon: {
    height: 45,
    width: 50
  },

});