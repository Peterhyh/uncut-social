import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import BACK_BUTTON from '../assets/images/backButton.png';
import FormUploader from './AddNewPost/FormUploader';

const AddNewPost = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FormUploader />
        </View>
    );
};

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image
                    style={styles.backButton}
                    source={BACK_BUTTON}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>NEW POST</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    headerContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backButton: {
        height: 30,
        width: 30,
    },
    headerText: {
        color: '#fff',
        position: 'absolute',
        left: '42%',
        fontWeight: 700,
    },
});

export default AddNewPost;