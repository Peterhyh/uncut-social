// import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
import { useState } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: { backgroundColor: '#202020' },
                headerTintColor: '#212121',
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />

            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{ title: 'Profile' }}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    const [content, setContent] = useState();
    return (
        <View
            style={{
                flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <DirectoryNavigator />
        </View>
    );
};

export default Main;