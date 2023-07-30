import { View, Text, Image, StyleSheet } from 'react-native';
import { users } from '../../data/users';

const Message = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.senderPic} source={users[2].profilePic} />
            </View>
            <View style={styles.senderDescription}>
                <Text>NAME</Text>
                <Text>7+ New Messages</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#1F1F1F',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    senderPic: {
        height: 65,
        width: 65,
        borderRadius: 50,
    },
    senderDescription: {
        marginLeft: 10,
    },
});

export default Message;