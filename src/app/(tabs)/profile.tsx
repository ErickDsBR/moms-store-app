import { styles } from "@/styles/auth.styles";
import React from "react";
import { Image, Text, View } from "react-native";
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
