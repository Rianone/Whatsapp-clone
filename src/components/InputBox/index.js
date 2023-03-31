import { View, Text, StyleSheet, TextInput } from 'react-native'
import { AntDesign, MaterialIcons } from "@expo/vector-icons"

const InputBox = () => {
  return (
    <View style={styles.container}>
          <AntDesign name='plus' size={24} color="royalblue" />

          <TextInput placeholder='type your message...' style={ styles.input} />
          
          <MaterialIcons name='send' size={24} color="white" style={ styles.send } />
    </View>
  )
}

export default InputBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    input: {},
    send: {},
})