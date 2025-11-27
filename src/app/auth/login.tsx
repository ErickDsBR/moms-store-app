import React, { useState } from "react";
// props
import { Link, router } from "expo-router";
import { Alert, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// outras pastas e arquivos
import { supabase } from "../../../lib/supabase";
import { styles } from "../../../styles/auth.styles";

export default function login() {
    const [setemail, authmail] = useState("");
    const [setpassword, authpass] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSingUp() {
        // Add login logic here
        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email: setemail,
            password: setpassword,

        })
        if (error) {
            Alert.alert("Error", error.message);
            return;
        }

        setLoading(false);
        router.replace("/home");
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>

                    <View style={styles.boxLogin}>
                        <TextInput onChangeText={authmail} value={setemail} placeholder="Digite seu Email" style={styles.authlogin} />

                        <TextInput onChangeText={authpass} value={setpassword} placeholder="Password" style={styles.authlogin} secureTextEntry={true} />

                        <TouchableOpacity onPress={handleSingUp} style={styles.buttonlink}>
                            <Text style={styles.singup_text}>Singup</Text>
                        </TouchableOpacity>

                        <Link style={styles.link} href="/auth/singup" >
                            <Text>Ainda Não Possui Uma Conta? Cadastre-Se!</Text>
                        </Link>

                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}