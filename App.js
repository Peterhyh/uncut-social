import RegisterScreen from './screens/RegisterScreen';
import LandingScreen from './screens/LandingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Landing'
      >
        <Stack.Screen
          name='Landing'
          component={LandingScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
