import { StyleSheet } from "react-native";
import { cozy, sophisticated } from "../constants/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: cozy.background,
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
    justifyContent: "center",

  },
  buttonlink: {

    borderRadius: 5,
    justifyContent: "center",
    textAlign: "center",
  },
  singup_text: {
    backdroColor: sophisticated.primary,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },


  link: {
    marginTop: 8,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
