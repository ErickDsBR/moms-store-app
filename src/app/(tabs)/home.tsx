import { supabase } from "@/lib/supabase";
import { styles } from "@/styles/auth.styles";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function home() {
  const [products, setProducts] = useState<any[]>([]);

  async function fetchProducts() {
    const { error, data } = await supabase.from("products").select("*");

    if (error) {
      console.log("Error fetching products:", error);
    } else {
      setProducts(data || []);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.view_home}>
        <View style={styles.container_logo}>
          <Image
            style={styles.logo}
            source={require("@/assets/images/logo.png")}
          ></Image>
          <TextInput
            style={styles.SearchBar}
            placeholder="Pesquisar ?"
          ></TextInput>
        </View>
        <ScrollView>
          <View style={styles.container_products}>
            {products.map((item) => (
              <View key={item.id} style={styles.box_product}>
                <Text key={item.name}></Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
