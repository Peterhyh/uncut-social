import { Text, View, StyleSheet } from 'react-native';
import { Avatar, ListItem, Card } from 'react-native-elements';

import PIC from '../assets/images/profilePic.jpg'




const ProfileScreen = () => {
    const profile = { id: 0, img: PIC, name: 'Peter Huynh', bio: 'Welcome to my page!' };

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Avatar
                    size={100}
                    rounded
                    source={profile.img}
                />
            </View>
            <View>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>{profile.name}</Card.Title>
                    <Text style={styles.text}>{profile.bio}</Text>
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#202124',
        height: '100%',
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
    },
    card: {
        borderRadius: 10,
        backgroundColor: '#2F2F2F',
        borderColor: '#3B3B3B',
    },
    text: {
        color: '#fff',
    },
});

export default ProfileScreen;