import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { newsletters } from '../../DummyData'; // Adjust the path as necessary

export default function NewsLetterList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Announcements</Text>
      <FlatList
        data={newsletters}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('AnnouncementDetail', { title: item.title, text: item.text })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    item: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        marginVertical: 5
    }
});
