import { Text, View, Image, StyleSheet } from 'react-native';

function ChatListItem() {
    return ( 
        <View style={styles.container}>
            <Image source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg" }} style={styles.image} />
            
            <View>
                <View style={styles.row}>
                    <Text>Lukas</Text>
                    <Text>07:30</Text>
                </View>
                <Text>Oke</Text>
            </View>
        </View>
     );
}

export default ChatListItem;


const styles = StyleSheet.create({
    container: {
        display: "flex",
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: "row",
        width: "90%",
        padding: 5
    },
    row: {
        display: "flex", 
        flexDirection: "row",
        width: "65%",
        justifyContent: "space-between",
    },
    image: { width: 50, height: 50, borderRadius: 50 }
});