import { supabase } from "@/lib/supabase";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../contexts/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout></MainLayout>
    </AuthProvider>
  );
}

function MainLayout() {
  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session.user);
        router.replace("/(tabs)/home");
        return;
      }
      setAuth(null);
      router.replace("/auth/login");
    });
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
