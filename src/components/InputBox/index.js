import { View, Text, StyleSheet, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const InputBox = () => {
  const [text, setText] = useState('');

  function onSend() {
    console.warn("Sending a new message: " + text);

    setText('')
  }
  return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <AntDesign name='plus' size={20} color="royalblue" />

        <TextInput value={text} placeholder='Type your message...' style={styles.input} onChangeText={setText} />

        <MaterialIcons onPress={onSend} name='send' size={20} color="white" style={styles.send} />
      </SafeAreaView>
  )
}

export default InputBox;

const styles = StyleSheet.create({
    container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    alignItems: "center",
    },
    input: {
      flex: 1,
      borderBottomColor: "white",
      padding: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      paddingHorizontal: 10,

      borderRadius: 50,
      borderColor: "lightgray",
      borderWidth:StyleSheet.hairlineWidth,
    },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden"

  },
})