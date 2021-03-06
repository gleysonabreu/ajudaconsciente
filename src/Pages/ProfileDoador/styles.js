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
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 5
  },
  headerBack: {
    flexDirection: "row",
    alignItems: "center"
  },
  contentPage: {
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
  input: {
    marginBottom: 10,
    backgroundColor: "#e0e0e0",
    width: 300,
    padding: 10,
    borderRadius: 15,
    fontSize: 17
  },
  divInputs: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: "center"
  },
  labelInput: {
    fontSize: 20,
    width: 100
  },
});