import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <TouchableOpacity>
                    <Image
                        style={styles.addStory}
                        source={require('../assets/images/plus.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.storyContainer}>
                        <Image
                            style={styles.story}
                            source={require('../assets/images/profilePic.jpg')}
                        />
                        <Text style={styles.text}>Peter Huynh</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    text: {
        color: '#fff'
    },
    addStory: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginLeft: 10,
    },
    storyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    story: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: '#4EC9B0',
        borderWidth: 3,
    },
});

export default Stories;