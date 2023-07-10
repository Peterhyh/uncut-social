import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.logo}>UNCUT</Text>
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/plus.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/bell.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadgeContainer}>
                        <Text style={styles.unreadBadge}>7</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={require('../assets/images/message.png')}
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