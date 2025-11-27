import { styles } from "@/styles/auth.styles";
import React, { useState } from "react";
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function singup() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    return (
        <SafeAreaProvider>
            <SafeAreaView style = {styles.container}>
                <View>
                    <Text>Singup Screen</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}