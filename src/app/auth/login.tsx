import React, {useState} from "react";
// props
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// outras pastas
import { styles } from "../../../styles/auth.styles";
import { userdata } from "../../../types/data_types";


export default function login() {
    const [setemail, authmail] = useState("");
    const [setpassword, authpass] = useState("");

    const handleLogin = () => {
        // Lógica de autenticação aqui
        userdata.
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.boxLogin}>
                        <TextInput onChangeText={authmail} value={setemail} placeholder="Email" style={styles.authlogin} />
                        <TextInput onChangeText={authpass} value={setpassword} placeholder="Password" style={styles.authlogin} secureTextEntry={true} />
                        <TouchableOpacity onPress={} style={styles.buttonlink}>Singup</TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}