import { Text, View, Image, StyleSheet } from 'react-native';

function ChatListItem() {
    return ( 
        <View style={styles.container}>
            <Image source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg" }} style={styles.image} />
            
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>Lukas</Text>
                    <Text>07:30</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>Hello world </Text>
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

