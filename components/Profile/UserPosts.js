import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

const UserPosts = () => (
    <View style={styles.container}>
        <Divider width={1} orientation='vertical' />
        <View style={styles.postContainer}>
            <Text style={styles.noContentText}>No Content</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },
    postContainer: {
        marginTop: 50,
    },
    noContentText: {
        color: '#fff',
        fontSize: 30,
    },
});


export default UserPosts;