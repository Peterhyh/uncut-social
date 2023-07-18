import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import NewPostScreen from './screens/NewPostScreen';
import RegisterScreen from './screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

export const SignedInStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName='HomeScreen'
            >
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={screenOptions}
                />
                <Stack.Screen
                    name='NewPostScreen'
                    component={NewPostScreen}
                    options={screenOptions}
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