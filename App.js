import RegisterScreen from './screens/RegisterScreen';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, SENDER_ID, APP_ID, MEASUREMENT_ID } from '@env';
import { SafeAreaView } from 'react-native';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView>
      <Header />
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
          <Stack.Screen
            name='Login'
            component={LoginScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
