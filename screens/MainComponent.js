import ProfileScreen from './ProfileScreen';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#073028' },
};

const Main = () => {
    return (
        <View
            style={{
                flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
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

export default Main;