import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import { FIREBASE_AUTH } from '../App';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = () => {

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const input6 = useRef(null);

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
        } else if (currentInput === input2) {
            input3.current.focus();
        } else if (currentInput === input3) {
            input4.current.focus();
        } else if (currentInput === input4) {
            input5.current.focus();
        } else if (currentInput === input5) {
            input6.current.focus();
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
        <View style={styles.container}>
            <ScrollView>
                <TextInput
                    returnKeyType='next'
                    ref={input1}
                    onSubmitEditing={() => handleReturnKeyPress(input1)}
                    autoCapitalize='none'
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    returnKeyType='next'
                    ref={input2}
                    onSubmitEditing={() => handleReturnKeyPress(input2)}
                    autoCapitalize='none'
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    returnKeyType='next'
                    ref={input3}
                    onSubmitEditing={() => handleReturnKeyPress(input3)}
                    placeholder='Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    returnKeyType='next'
                    ref={input4}
                    onSubmitEditing={() => handleReturnKeyPress(input4)}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TextInput
                    returnKeyType='next'
                    ref={input5}
                    onSubmitEditing={() => handleReturnKeyPress(input5)}
                    placeholder='First Name'
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextInput
                    returnKeyType='done'
                    ref={input6}
                    onSubmitEditing={() => handleReturnKeyPress(input6)}
                    placeholder='Last Name'
                    value={lastName}
                    onChangeText={setLastName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
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

        flex: 1,
        width: '100%'
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