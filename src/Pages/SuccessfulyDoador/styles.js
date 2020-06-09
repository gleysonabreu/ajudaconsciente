import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#3EC300"
  },
  successText: {
    fontSize: 22,
    color: "#006621",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#006621",
    padding: 15,
    borderRadius: 16,
    marginTop: 30
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold"
  }
});