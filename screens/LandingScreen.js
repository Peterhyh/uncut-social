import { Button, View, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const LandingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title='Register'
                onPress={() => navigation.navigate('Register')}
            />
            <Button
                title='Login'
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LandingScreen;