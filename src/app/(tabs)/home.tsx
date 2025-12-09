import { supabase } from "@/lib/supabase";
import { styles } from "@/styles/auth.styles";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  const [prod, setopenProd] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  async function fetchProducts() {
    const { error, data } = await supabase.from("produtos").select("*");

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
              <View style = {styles.all_styles}>
              <TouchableOpacity key={item.id} style={styles.box_product}>
                <Text key={item.id} style = {styles.prod_name}>{item.name}</Text>
                <Text key={item.pg} style = {styles.pg_mogi}>{item.pg}</Text>
                <Text key={item.id} style = {styles.prod_value}>{item.preco}</Text> 
              </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>       
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
