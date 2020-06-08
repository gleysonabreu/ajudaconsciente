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
  icon: {
    height: 45,
    width: 50
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15
  },
  contentPage: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    backgroundColor: '#E61610',
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    marginBottom: 30,
  },
  textButton: {
    fontSize: 17,
    color: "#FFF",
    textTransform: 'uppercase',
    fontWeight: "bold"
  },
  menuLogin: {
    flexDirection: 'row',
  },
  loginText: {
    fontWeight: 'bold',
    color: "#E61610",
  },
});