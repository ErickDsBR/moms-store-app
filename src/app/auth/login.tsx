import { Link } from "expo-router";
import { TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../styles/auth.styles";

export default function login() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.boxLogin}>
                        <TextInput placeholder="Email" style={styles.authlogin} />
                        <TextInput placeholder="Password" style={styles.authlogin} secureTextEntry={true} />
                        <Link href="/auth/singup" style={styles.buttonlink} >Go to Singup</Link>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}