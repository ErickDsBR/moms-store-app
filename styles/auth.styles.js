import { StyleSheet } from "react-native";
import { cozy } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: cozy.secondary,
  },
  container_logo: {
    justifyContent: "space-between",
  },
  logo: {
    backgroundColor: "#fff",
    margin: 10,
    elevation: 15,
    borderRadius: 75,
    width: 80,
    height: 80,
  },
  SearchBar: {
    borderColor: "#000",
    backgroundColor: "#fff",
    fontFamily: "arial",
    textAlign: "center",
    height: 40,
    width: "80%",
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  container_products: {},

  //!-- profile STYLES --!//

  profile: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 250,
    backgroundColor: cozy.primary,
  },
  profile_pic: {
    backgroundColor: "#fff",
    borderWidth: 1,
    elevation: 10,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profile_name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
