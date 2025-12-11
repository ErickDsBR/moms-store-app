import { supabase } from "@/lib/supabase";
import { styles } from "@/styles/auth.styles";
import { product } from "@/types/data";

//! 

import React, { useEffect, useState } from "react";
import { Image, Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface product {
  id: number;
  quantidade: string;
  name: string;
  preco: Number;
}

export default function home() {
  const [prod, setopenProd] = useState(false);   //* modal para abrir o produto 
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProductId, setSelectedProductId] = useState< product | null>(null); 

  function handleOpenProduct(id: product) {
    setSelectedProductId(id);
    setopenProd(true);
  }

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
              <TouchableOpacity 
              onPress={() => handleOpenProduct(item)}
              key={item.id} 
              style={styles.box_product}
              >
                <Text key={item.id} style = {styles.prod_name}>{item.name}</Text>
                <Text key={item.id} style = {styles.prod_value}>{(item.preco).toFixed(2)}</Text> 
              </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
        <Pressable style = {styles.floating_button}>

        </Pressable>     
      </SafeAreaView>
      <SafeAreaView>
            <Modal
              style={styles.modal_produto}
              animationType="slide"
              visible={prod}
              onRequestClose={() => setopenProd(false)}
            >
              <View>
                <Text>{selectedProductId?.name}</Text>  
                <Text>{(selectedProductId?.preco)?.toFixed(2)}</Text>
              </View>
            </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
