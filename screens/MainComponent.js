import ProfileScreen from './ProfileScreen';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
import { View, Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#000' },
};

const Main = () => {
    return (
        <View
            style={styles.container}
        >
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={screenOptions}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Tab.Screen
                    name='Profile'
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
    nav: {
        backgroundColor: 'red',
    },
});

export default Main;