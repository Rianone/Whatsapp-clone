import { FlatList } from 'react-native';
import chats from "../../assets/data/chats.json"
import ChatListItem from '../components/ChatListItem';

function ChatsScreen() {
    return ( 
        <FlatList data={chats} renderItem={({ item }) => <ChatListItem chat={item} /> } />
    );
}

export default ChatsScreen;