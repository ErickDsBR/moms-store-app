import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>ola mundo</Text>
        </View>
      </SafeAreaView >
    </SafeAreaProvider>
  )
}