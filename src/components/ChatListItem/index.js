import { Text, View, Image, StyleSheet } from 'react-native';

function ChatListItem({ chat }) {
    return ( 
        <View style={styles.container}>
            <Image source={{ uri: chat.user.image }} style={styles.image} />
            
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                    <Text>{chat.lastMessage.createdAt}</Text>
                    {/* <Text>{new Date(chat.lastMessage.createdAt).get()}</Text> */}
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
            </View>
        </View>
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

