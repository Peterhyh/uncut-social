import { View, TextInput, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FIREBASE_AUTH } from '../App';
import { Formik } from 'formik';
import * as Yup from 'yup';

const auth = FIREBASE_AUTH;

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'Password must be at least 8 characters')
    })

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
        <Formik
            validationSchema={loginFormSchema}
            onSubmit={response => console.log(response)}

        >
            <View style={styles.container}>
                <View>

                </View>
                <Text style={styles.logo}>UPLOAD</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref={input1}
                        returnKeyType='next'
                        onSubmitEditing={() => handleReturnKeyPress(input1)}
                        style={styles.input}
                        autoCapitalize='none'
                        placeholder='Email'
                        placeholderTextColor='white'
                        keyboardType='email-address'
                        autoFocus={true}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        ref={input2}
                        returnKeyType='done'
                        onSubmitEditing={() => handleReturnKeyPress(input2)}
                        style={styles.input}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType='password'
                        placeholder='Password'
                        placeholderTextColor='white'
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.forgotPasswordButtonContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordButton}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpContainer}>
                    <Text style={styles.text}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 100,
    },
    logo: {
        color: '#fff',
        fontWeight: '200',
        fontSize: 50,
        marginBottom: 50,
    },
    inputContainer: {
        width: '90%',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        color: '#fff',
        backgroundColor: 'gray',
        margin: 10,
        padding: 10,
    },
    loginContainer: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#049DF8',
        marginTop: 30,
        borderRadius: 10,
    },
    button: {
        padding: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    forgotPasswordButtonContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginRight: 70,
    },
    forgotPasswordButton: {
        color: '#6BB0F5',
    },
    text: {
        color: '#fff'
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    signUpText: {
        color: '#6BB0F5',
        marginLeft: 10,
    },
});

export default LoginScreen;