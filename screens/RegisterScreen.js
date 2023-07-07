import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import { FIREBASE_AUTH } from '../App';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = () => {

    const input1 = useRef(null);
    const input2 = useRef(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    const auth = FIREBASE_AUTH;

    const handleClearForm = () => {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setFirstName('');
        setLastName('');
        setEmail('');
    };

    const handleReturnKeyPress = (currentInput) => {
        if (currentInput === input1) {
            input2.current.focus();
        }
    };

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    console.log(response);
                    handleClearForm();
                    alert('Success!');
                })
                .catch(err => alert(err));
        } catch (error) {
            console.log(error);
            alert('Error!');
        }
    };

    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputContainer}>

                    <TextInput
                        ref={input1}
                        returnKeyType='next'
                        onSubmitEditing={() => handleReturnKeyPress(input1)}
                        keyboardAppearance='dark'
                        autoCapitalize='none'
                        style={styles.input}
                        placeholder='Username'
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        ref={input2}
                        keyboardAppearance='dark'
                        autoCapitalize='none'
                        style={styles.input}
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        keyboardAppearance='dark'
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        keyboardAppearance='dark'
                        style={styles.input}
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TextInput
                        keyboardAppearance='dark'
                        style={styles.input}
                        placeholder='First Name'
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        keyboardAppearance='dark'
                        style={styles.input}
                        placeholder='Last Name'
                        value={lastName}
                        onChangeText={setLastName}
                    />

                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSignUp}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView>

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
    },
    inputContainer: {
        width: '90%',
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        height: 50,
        padding: 10,
    },
});

export default RegisterScreen;