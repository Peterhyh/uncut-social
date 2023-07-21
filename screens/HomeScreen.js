import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Stories from '../components/Home/Stories';
import Header from '../components/Home/Header';
import Post from '../components/Home/Post';
import { POST } from '../data/posts';
import BottomTab from '../components/Home/BottomTab';
import ProfileScreen from './ProfileScreen';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Home');
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />


            {
                activeTab === 'Home'
                    ? (
                        <>
                            <Stories />
                            <ScrollView>
                                {POST.map((post, i) => (
                                    <Post post={post} key={i} />
                                ))}
                            </ScrollView>
                        </>
                    ) : null
            }
            {
                activeTab === 'Profile'
                    ? (
                        <ProfileScreen />
                    ) : null
            }

            <BottomTab activeTab={activeTab} setActiveTab={setActiveTab} />
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