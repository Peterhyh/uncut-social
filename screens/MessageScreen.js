import { View, ScrollView, StyleSheet } from 'react-native';
import Message from '../components/Message/Message';

const MessageScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Message />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
    },
});

export default MessageScreen;