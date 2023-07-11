import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import SHARE from '../assets/images/share.png';
import COMMENT from '../assets/images/comment.png';
import LIKE from '../assets/images/like.png';

const Post = ({ post, i }) => {
    return (
        <View style={styles.container} key={i}>
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={styles.postFooterContainer}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>
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
            <Divider width={1} orientation='vertical' />
            <Image
                style={styles.postImage}
                source={post.post_image}
            />
            <Divider width={1} orientation='vertical' />
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

const Likes = ({ post }) => (
    <View>
        <Text style={styles.text}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
);

const Caption = ({ post }) => (
    <View>
        <Text>
            <Text style={styles.postUsername}>{post.username}</Text>
            <Text style={styles.postCaption}> {post.caption}</Text>
        </Text>
    </View>
);

const CommentSection = ({ post }) => {
    return (
        <View>
            {!!post.comments.length && (
                <Text style={styles.commentSectionText}>
                    View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {post.comments.length > 1 ? 'comments' : ' comment'}
                </Text>
            )}
        </View>
    );
};

const Comments = ({ post }) => (
    <View>
        {post.comments.map((comments, i) => (
            <View style={styles.commentsContainer} key={i}>
                <Text style={styles.text}>
                    <Text style={styles.postUsername}>
                        {comments.username}
                    </Text>
                    {' '}{comments.comment}
                </Text>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    text: {
        color: '#fff',
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
    postFooterContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    postFooterIconContainer: {
        flexDirection: 'row',
    },
    postUsername: {
        color: '#fff',
        fontWeight: 600,
    },
    postCaption: {
        color: '#fff',
    },
    commentSectionText: {
        color: 'grey',
    },
    commentsContainer: {
        marginTop: 5,
    }
});

export default Post;