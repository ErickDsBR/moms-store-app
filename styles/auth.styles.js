import { StyleSheet } from "react-native";
import { cozy } from "../constants/colors";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: cozy.secondary,
  },
  boxLogin: {
    elevation: 50,
    marginTop: "40%",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: cozy.primary,
  },
  boxSingup: {
    width: 180,
    height: 180,
    borderRadius: 50,
    backgroundColor: "#fff",

  },
  authlogin: {
    borderRadius: 15,
    backgroundColor: "#fff",
    borderBlockColor: "",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",

  },
  buttonlink: {
    marginTop: 20,
    borderRadius: 5,

  },
  singup_text: {
    textAlign: "center",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",

  },
  link: {
    textAlign: "center",
    marginTop: 8,

  },


  //!-- HOME STYLES --!//
  view_home: {
    flex: 1,
    backgroundColor: cozy.secondary,

  },
  container_logo: {
    

  },
  logo: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 75,
    width: 100,
    height: 100,

    
  }


});