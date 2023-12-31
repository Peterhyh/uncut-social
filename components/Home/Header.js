import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../App';

const Header = ({ navigation }) => {

    const signOutUser = async () => {
        try {
            await signOut(FIREBASE_AUTH)
                .then(() => {
                    alert('You have signed out.');
                })
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.logo}>UPLOADED</Text>
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.push('NewPost')}
                >
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/plus.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/bell.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('Message')}
                >
                    <View style={styles.unreadBadgeContainer}>
                        <Text style={styles.unreadBadge}>7</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/message.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => signOutUser()}
                >
                    <Image
                        style={styles.icon}
                        source={require('../../assets/images/settings.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 70,
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    logo: {
        color: '#fff'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    unreadBadgeContainer: {
        position: 'absolute',
        backgroundColor: '#FF3250',
        left: 18,
        bottom: 20,
        width: 20,
        height: 18,
        zIndex: 100,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    unreadBadge: {
        color: '#fff',
    }
});

export default Header;