import { View, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  
  const isMyMessage = () => {
        return message.user.id === 'u1';
  }

  return (
    <View style={[styles.container, (isMyMessage() ? styles.sent_message: styles.recieved_message)]}>
          <Text>{message.text}</Text>
          <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: "80%"
    },
    sent_message: {
        backgroundColor: "white",
        alignSelf: "flex-start",
    },
    recieved_message: {
        backgroundColor: "#DCF8C5",
        alignSelf: "flex-end",
    },
    time: {
        color: "grey",
        alignSelf: "flex-end",
    },
});