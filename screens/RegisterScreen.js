import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const auth = FIREBASE_AUTH;

    const handleSignUp = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Success!');
        } catch (error) {
            console.log(error);
            alert('Error!');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                placeholder='Confirm Password'
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <TextInput
                placeholder='First Name'
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                placeholder='Last Name'
                value={lastName}
                onChangeText={setLastName}
            />

            <TouchableOpacity
                onPress={handleSignUp}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    button: {
        backgroundColor: '#202020',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
    }
});

export default RegisterScreen;