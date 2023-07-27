import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import NewPostScreen from './screens/NewPostScreen';
import RegisterScreen from './screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from './screens/MessageScreen';

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

export const SignedInStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName='Home'
            >
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={screenOptions}
                />
                <Stack.Screen
                    name='NewPost'
                    component={NewPostScreen}
                    options={screenOptions}
                />
                <Stack.Screen
                    name='Message'
                    component={MessageScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export const SignedOutStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
            >
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={screenOptions}
                />
                <Stack.Screen
                    name='RegisterScreen'
                    component={RegisterScreen}
                    options={screenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};