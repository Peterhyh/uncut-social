import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Stories from '../components/Stories';
import Header from '../components/Header';
import Post from '../components/Post';
import { POST } from '../data/posts';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {POST.map((post, i) => (
                    <Post post={post} key={i} />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        height: '100%',
    },
});

export default HomeScreen;