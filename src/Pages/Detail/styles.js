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
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
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
  pageDiv: {
    padding: 24,
    borderRadius: 15,
    backgroundColor: "#EDEDED",
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 1,
    width: 400
  },
  pageFlux: {
    padding: 24,
    borderRadius: 15,
    backgroundColor: "#EDEDED",
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 1,
    width: 400
  },
  pageDivColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1
  },
  pageDivColumnTitle: {
    fontSize: 16,
  },
  npedido: {
    color: "#ff5800",
    fontSize: 22,
    fontWeight: 'bold'
  },
  datepedido: {
    color: "#777",
  },
  titleEntryDiv: {
    fontSize: 23,
    fontWeight: 'bold',
    color: "#333",
    marginBottom: 10
  },
  txtKg: {
    color: "#ff5800",
  },
  txtFluxo: {
    fontSize: 16,
    color: "#ff5800",
    fontWeight: 'bold'
  }
});