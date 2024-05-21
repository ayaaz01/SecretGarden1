import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function NewsLetterHeader({title}) {
  return (
    <TouchableOpacity style={styles.topacity}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  topacity: {
     backgroundColor: "black"
  },
})