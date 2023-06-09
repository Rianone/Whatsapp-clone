import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from '@react-navigation/native';


dayjs.extend(relativeTime);

function ChatListItem({ chat }) {
    let navigation = useNavigation();
    return ( 
        <Pressable onPress={() => {
            navigation.navigate('Chat', {id: chat.id, name : chat.user.name });
        }} style={styles.container}>

            <Image source={{ uri: chat.user.image }} style={styles.image} />
            
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                    <Text>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
            </View>
            
        </Pressable>
     );
}

export default ChatListItem;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    content: {
        flex: 1,
        borderBottomColor: "lightgrey",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    name: {
        flex: 1,
        fontWeight: "bold"
    },
    subTitle: {
        color: "grey"
    },
    row: {
        flexDirection: "row", 
        marginBottom: 5,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    }
});

