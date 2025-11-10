import { Link } from "expo-router";
import { View, Text, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/auth.styles";
export default function login() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.boxLogin}>
                        <TextInput></TextInput>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}