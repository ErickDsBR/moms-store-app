import { styles } from '@/styles/auth.styles'
import React from 'react'
import { Image, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
export default function home() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.view_home}>
        <View style={styles.container_logo}>
          <Image style = {styles.logo} source={require('@/assets/images/logo.png')}></Image>
        </View>
      </SafeAreaView >
    </SafeAreaProvider>
  )
}