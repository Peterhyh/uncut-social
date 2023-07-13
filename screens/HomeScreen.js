import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Stories from '../components/HomeScreen/Stories';
import Header from '../components/HomeScreen/Header';
import Post from '../components/HomeScreen/Post';
import { POST } from '../data/posts';
import BottomTab from '../components/HomeScreen/BottomTab';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {POST.map((post, i) => (
                    <Post post={post} key={i} />
                ))}

            </ScrollView>
            <BottomTab />
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