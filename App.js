//------------------------------FIREBASE------------------------------
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

const db = getFirestore(FIREBASE_APP);

// const db = firebase.firestore();

export { FIREBASE_AUTH, db };
//------------------------------FIREBASE------------------------------
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
}


import SignedInStack from './navigation';

export default function App() {
  return (
    <SignedInStack />
  );
};


