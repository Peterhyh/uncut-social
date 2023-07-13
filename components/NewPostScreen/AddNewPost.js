import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import BACK_BUTTON from '../../assets/images/backButton.png';
import FormUploader from './FormUploader';

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormUploader />
        </View>
    );
};

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
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
        paddingTop: 40,
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