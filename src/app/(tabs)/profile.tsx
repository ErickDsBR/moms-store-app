import { supabase } from "@/lib/supabase";
import { styles } from "@/styles/auth.styles";
import React, { useEffect, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function profile() {

  const [ingredients, setIngredients] = useState(false);
  const [ingredientList, setIngredientList] = useState<any[]>([]);

  async function fetchIngredients() {
    const { error, data } = await supabase
    .from("ingredientes")
    .select("*");

    if (error) {
      console.log("Error fetching ingredients:", error);
    }
    else {
      setIngredientList(data || []);
    }
  }
  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.profile_pic}></Image>
          <Text style={styles.profile_name}>NAME</Text>
        </View>
        <View style={styles.profile_options}>
          <TouchableOpacity style={styles.buttons} onPress={() => setIngredients(true)}>
            <Text style = {styles.button_text} >Ingredientes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}></TouchableOpacity>
          <TouchableOpacity style={styles.buttons}></TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView>
        <Modal 
        visible={ingredients}
        animationType="slide"
        onRequestClose={() => setIngredients(false)}
        >
          <View style = {styles.container_ingredients}>
            {ingredientList.map((ingredient) => (
              <View key={ingredient.id}>
                <Text>{ingredient.name}</Text>
              </View>
            
            ))}
            
          </View>

        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
