import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function None() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>não a tarefas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  marginTop: '4%',
  justifyContent: 'center',
  alignItems: 'center',
  
  }, 
  title:{
    fontSize: 20,
  }
})