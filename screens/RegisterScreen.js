import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';



const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
                placeholder='Confirm Password'
                secureTextEntry={true}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <TextInput
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextInput
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <TouchableOpacity
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