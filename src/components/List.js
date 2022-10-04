import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity 
} from 'react-native'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons';

export default function List({item, deleteItem}) {
  return (
    <View style={styles.Card}>
      <Text style={styles.title}>{item}</Text>
      <TouchableOpacity onPress={deleteItem}>
        <FontAwesome name="trash" size={20} color="#22272e"  />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Card: {
    marginHorizontal: '4%',
    marginTop: '5%',
    backgroundColor: 'rgba(196, 196, 196, 0.20)',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    
  }, 
  title:{
    color: ''
  }
})