import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 20,
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
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    backgroundColor: '#E61610',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold"
  },
  contentPage: {
    flex: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: "center"
  },
  productList: {
    marginTop: 10,
    flex: 1,
  },
  product: {
    flex: 1,
    width: 370,
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#EDEDED",
    padding: 25,
    borderRadius: 16,
    justifyContent: 'space-between'
  },
  titleCart: {
    fontSize: 24,
    marginTop: 25,
    bottom: 15,
    textAlign: 'center'
  },
  text: {
    fontSize: 17,
  },
  textId: {
    fontSize: 17,
    color: "#E61610",
    fontWeight: "bold"
  },
});