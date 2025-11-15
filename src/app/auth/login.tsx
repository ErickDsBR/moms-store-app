import React, { useState } from "react";
// props
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// outras pastas
import { styles } from "../../../styles/auth.styles";


export default function login() {
    const [setemail, authmail] = useState("");
    const [setpassword, authpass] = useState("");

    const handleLogin = () => {
        console.log("Login attempted with:", setemail, setpassword);
        // Add login logic here
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.boxLogin}>
                        <TextInput onChangeText={authmail} value={setemail} placeholder="Email" style={styles.authlogin} />
                        <TextInput onChangeText={authpass} value={setpassword} placeholder="Password" style={styles.authlogin} secureTextEntry={true} />
                        <TouchableOpacity onPress={handleLogin} style={styles.buttonlink}>Singup</TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}