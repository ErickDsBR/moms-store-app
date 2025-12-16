import { styles } from "@/styles/auth.styles";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const profile_functions = [];

export default function profile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.profile_pic}></Image>
          <Text style={styles.profile_name}>NAME</Text>
        </View>
        <View style={styles.profile_options}>
          <TouchableOpacity style={styles.buttons}>
            <Text style = {styles.button_text} >Ingredientes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}></TouchableOpacity>
          <TouchableOpacity style={styles.buttons}></TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
