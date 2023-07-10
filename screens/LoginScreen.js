import { View, TextInput, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FIREBASE_AUTH } from '../App';

const auth = FIREBASE_AUTH;

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const input1 = useRef();
    const input2 = useRef();

    const clearForm = () => {
        setEmail('');
        setPassword('');
    };

    const handleReturnKeyPress = (currentInput) => {
        if (currentInput === input1) {
            input2.current.focus();
        };
    };

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    console.log(response);
                    alert('Login Successful!');
                    clearForm();
                })
                .catch(err => {
                    alert('Email and password did not match');
                });
        } catch (error) {
            alert(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                ref={input1}
                returnKeyType='next'
                onSubmitEditing={() => handleReturnKeyPress(input1)}
                style={styles.input}
                autoCapitalize='none'
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                ref={input2}
                returnKeyType='done'
                onSubmitEditing={() => handleReturnKeyPress(input2)}
                style={styles.input}
                autoCapitalize='none'
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        margin: 10,
        padding: 10,
    },
    button: {
        backgroundColor: '#4EC9B0',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
    },
});

export default LoginScreen;