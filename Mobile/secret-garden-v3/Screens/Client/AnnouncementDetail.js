import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnnouncementDetail({ route }) {
  const { title, text } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 16
  }
});
