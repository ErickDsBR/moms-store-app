import { Stack } from "expo-router";

export default function authlayout() {
    return <Stack
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="login" />
        <Stack.Screen name="singup" />
    </Stack>
}