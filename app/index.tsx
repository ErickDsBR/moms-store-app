import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/auth.styles";
import { newProduct } from "../types/data_types";

export default function Index() {
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.container}>
          <Text>Edit app/index.tsx to edit this screen.</Text>
          <Link href="/(tabs)/home">Go to Login</Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

