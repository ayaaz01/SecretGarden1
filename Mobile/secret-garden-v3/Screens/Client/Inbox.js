import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { messages } from '../../DummyData';

export default function Inbox() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  const handlePress = (message) => {
    setSelectedMessage(message);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {messages.map((msg, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => handlePress(msg.message)}>
            <Image source={{uri: "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"}} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{msg.sender}</Text>
              <Text style={styles.msgTitle}>{msg.title}</Text>
              <Text style={styles.itemPreview}>{msg.message}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedMessage}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6A1F8',
    },
    scrollContainer: {
      padding: 20,
    },
    item: {
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      padding: 15,
      marginBottom: 10,
      alignItems: 'center',
    },
    icon: {
      width: 64,
      height: 64,
      borderRadius: 32,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
    },
    itemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    itemPreview: {
      fontSize: 14,
    },
    msgTitle: {
      fontSize: 16,
      fontWeight: "bold"
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 2
    },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: "#2196F3",
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    }
  });
