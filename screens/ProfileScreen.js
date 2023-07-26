import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import UserPosts from '../components/Profile/UserPosts';
import { users } from '../data/users';





const ProfileScreen = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Avatar
                        rounded
                        borderRadius={10}
                        size={100}
                        source={users[0].profilePic}
                    />
                </View>
                <FollowersFollowing />
                <View>
                    <Card containerStyle={styles.card}>
                        <Card.Title style={styles.text}>{users[0].firstName}{' '}{users[0].lastName}</Card.Title>
                        <Text style={styles.text}>{users[0].bio}</Text>
                    </Card>
                </View>
                <UserPosts users={users} />
            </View>
        </ScrollView>
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
        margin: 10,
    },
});

export default ProfileScreen;