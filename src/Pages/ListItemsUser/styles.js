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
    flex: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button:{
    backgroundColor: '#E61610',
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold"
  },
  productList: {
    marginTop: 10,
    flex: 1
  },
  product: {
    padding: 24,
    borderRadius: 15,
    backgroundColor: "#EDEDED",
    marginBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 1,
    width: 300
  },
  productImage: {
    height: 200,
    width: 200,
    borderRadius: 15
  },
  productName: {
    fontSize: 17,
    marginBottom: 5
  },
  cart: {
    flexDirection: 'row',
    alignItems: "center"
  },
  cartText: {
    fontSize: 16,
    backgroundColor: "#E61610",
    padding: 10,
    marginRight: 5,
    borderRadius: 30,
    color: "#FFF",
    fontWeight: 'bold',
    alignItems: "center",
  },
});