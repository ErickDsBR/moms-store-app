import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/auth.styles";

export default function login() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.boxLogin}>
                        <Text></Text>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}