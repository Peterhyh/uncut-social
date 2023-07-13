import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import NewPostScreen from './screens/NewPostScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName='LoginScreen'
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

                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={screenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default SignedInStack;