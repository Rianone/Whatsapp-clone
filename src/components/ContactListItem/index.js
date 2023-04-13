import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';


function ContactListItem({ user }) {
    let navigation = useNavigation();
    return ( 
        <Pressable onPress={() => {

        }} style={styles.container}>

            <Image source={{ uri: user.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
                <Text numberOfLines={2} style={styles.subTitle}>{user.status}</Text>
            </View>
            
        </Pressable>
     );
}

export default ContactListItem;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: "center"
    },
    content: {

    },
    name: {
        fontWeight: "bold"
    },
    subTitle: {
        color: "grey"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    }
});


