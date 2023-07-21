import { View, StyleSheet } from 'react-native';
import AddNewPost from '../components/NewPost/AddNewPost';


const NewPostScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AddNewPost navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%'
    },
});

export default NewPostScreen;