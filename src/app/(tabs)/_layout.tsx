import { Tabs } from "expo-router";

export default function Tablayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false,
            }}
        >
            <Tabs.Screen name="home" />
            <Tabs.Screen name="profile"/>
        </Tabs>
    );
}