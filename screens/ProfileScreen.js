import { Text, View, StyleSheet } from 'react-native';
import { Avatar, ListItem, Card } from 'react-native-elements';

import PIC from '../assets/images/profilePic.jpg'




const ProfileScreen = () => {
    const profile = { id: 0, img: PIC, name: 'Peter Huynh', bio: 'Welcome to my page!' };

    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Avatar
                    rounded
                    borderRadius={10}
                    size={100}
                    source={profile.img}
                />
            </View>
            <FollowersFollowing />
            <View>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>{profile.name}</Card.Title>
                    <Text style={styles.text}>{profile.bio}</Text>
                </Card>
            </View>
            <userPosts />
        </View>
    );
};

const FollowersFollowing = () => (
    <View style={styles.followersFollowingContainer}>
        <View style={styles.counterContainer}>
            <Text style={styles.text}>10</Text>
            <Text style={styles.text}>Followers</Text>
        </View>
        <View style={styles.counterContainer}>
            <Text style={styles.text}>20</Text>
            <Text style={styles.text}>Following</Text>
        </View>
    </View>
);

const userPosts = () => {
    return (
        <>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        height: '100%',
    },
    avatar: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 50,
    },
    card: {
        borderRadius: 10,
        backgroundColor: '#2F2F2F',
        borderColor: '#fff',
    },
    text: {
        color: '#fff',
    },
    followersFollowingContainer: {
        flexDirection: 'row',
    },
    counterContainer: {
        alignItems: 'center',
        margin: 11,
    },
});

export default ProfileScreen;