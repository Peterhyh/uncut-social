import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements';


const UserPosts = ({ users }) => (
    <View style={styles.container}>
        <Divider width={1} orientation='vertical' />
        <View style={styles.postContainer}>
            {
                users[0].posts.length > 0
                    ? (
                        users[0].posts.map((post, i) => {
                            return (
                                <View key={i}>
                                    <Image style={styles.postImage} source={post.post_image} />
                                </View>
                            )
                        })
                    ) : (
                        <Text style={styles.noContentText}>No Content</Text>
                    )
            }

        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        width: '100%',
    },
    postContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    noContentText: {
        marginTop: 70,
        color: '#fff',
        fontSize: 30,
    },
    postImage: {
        width: 141,
        height: 141,
        margin: 1,
    },
});


export default UserPosts;