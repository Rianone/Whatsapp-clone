import { Text, View, Image, StyleSheet } from 'react-native';

function ChatListItem() {
    return ( 
        <View>
            <Image source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg" }} style={{ width: 50, height:50} } />
        </View>
     );
}

export default ChatListItem;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});