import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../styles/auth.styles";
import { Link } from 'expo-router';
export default function singup() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.boxSingup}>
            <Link href="/auth/login">Go to Login</Link>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}