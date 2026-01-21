import { StyleSheet } from "react-native";
import { cozy, vibrant } from "../constants/colors";

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
    backgroundColor: vibrant.primary,
  },
  container_logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  logo: {
    backgroundColor: "#fff",
    elevation: 15,
    borderRadius: 75,
    width: 75,
    height: 75,
  },
  SearchBar: {
    borderColor: "#000",
    backgroundColor: "#fff",
    fontFamily: "arial",
    textAlign: "center",
    width: "75%",
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  container_products: {
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
  },

  //!-- profile STYLES --!//

  profile: {
    borderRadius: 30,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 250,
    backgroundColor: vibrant.primary,
  },
  profile_pic: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    elevation: 10,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profile_name: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  profile_options: {
    backgroundColor: vibrant.primary,
    display: "flex",
    elevation: 20,
    borderRadius: 15,
    margin: 20,
    padding: 20,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "column",
  },
  blur_view: {
    backgroundColor: "#f5f5f5",
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "90%",
    borderRadius: 10,
    intensity: 90,
    tint: "light",
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    width: "100%",
    height: 50,
    margin: 10,
  },
  button_text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container_addigr: {
    flex: 1,
    padding: 10,
  },
  text_igr: {
    backgroundColor: vibrant.primary,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    elevation: 10,
    fontSize: 20,
    padding: 10,
  },
  //!-- modal styles ingredients--!//

  container_ingredients: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
  },

  //!-- product box --!//
  all_styles: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container_product: {
    activeOpacity: 1,
    justifyContent: "center",
  },
  box_product: {
    width: 150,
    backgroundColor: "#fff",
    height: 250,
    margin: 10,
    borderRadius: 10,
    elevation: 10,
  },
  prod_name: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  prod_value: {
    textAlign: "center",
    fontSize: 18,
  },
  modal_produto: {},
});
