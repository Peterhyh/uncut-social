import { View, Image, StyleSheet, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Post = ({ post, i }) => {
    return (
        <View style={styles.container} key={i}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
        </View>
    );
};

const PostHeader = ({ post }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.userInfo}>
                <Image
                    style={styles.profilePic}
                    source={post.profile_picture}
                />
                <Text style={styles.username}>{post.username}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.optionButton}>...</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const PostImage = ({ post }) => {
    return (
        <View style={styles.postImageContainer}>
            <Image
                style={styles.postImage}
                source={post.post_image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        height: 50,
        width: 50,
        marginRight: 10,
        borderRadius: 50,
    },
    username: {
        color: '#fff',
    },
    optionButton: {
        color: '#fff',
        fontWeight: 900,
    },
    postImageContainer: {
        width: '100%',
        height: 450,
    },
    postImage: {
        height: '100%',
        width: '100%',
    },
});

export default Post;