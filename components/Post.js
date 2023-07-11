import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import SHARE from '../assets/images/share.png';
import COMMENT from '../assets/images/comment.png';
import LIKE from '../assets/images/like.png';

const Post = ({ post, i }) => {
    return (
        <View style={styles.container} key={i}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter />
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

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
);

const PostFooter = () => (
    <View>
        <View style={styles.postFooterIconContainer}>
            <Icon imgStyle={styles.postFooter} imgUrl={LIKE} />
            <Icon imgStyle={styles.postFooter} imgUrl={COMMENT} />
            <Icon imgStyle={styles.postFooter} imgUrl={SHARE} />
        </View>

    </View>
);

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
    postFooter: {
        height: 33,
        width: 33,
        marginRight: 10,
    },
    postFooterIconContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10
    },
});

export default Post;