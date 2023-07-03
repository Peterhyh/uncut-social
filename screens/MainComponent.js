// import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Main = () => {
    const [content, setContent] = useState();

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
                    options={() => ({
                        title: route.params.profile
                    })}
                />
            </Stack.Navigator>
        );
    };
    return (
        <ProfileScreen />
    )
};

export default Main;