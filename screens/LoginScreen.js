import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FIREBASE_AUTH } from '../App';
import { Formik } from 'formik';
import * as Yup from 'yup';

const auth = FIREBASE_AUTH;

const LoginScreen = ({ navigation }) => {

    const loginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(8, 'Password must be at least 8 characters')
    });

    const input1 = useRef();
    const input2 = useRef();

    const handleReturnKeyPress = (currentInput) => {
        if (currentInput === input1) {
            input2.current.focus();
        };
    };

    // const handleLogin = async () => {
    //     try {
    //         await signInWithEmailAndPassword(auth, email, password)
    //             .then((response) => {
    //                 console.log(response);
    //                 alert('Login Successful!');
    //                 clearForm();
    //             })
    //             .catch(err => {
    //                 alert('Email and password did not match');
    //             });
    //     } catch (error) {
    //         alert(error);
    //     }
    // };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginFormSchema}
                onSubmit={values => {
                    console.log(values);
                    navigation.navigate('HomeScreen');
                }}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View>
                            <Text style={styles.logo}>UPLOADED</Text>
                        </View>


                        <View style={styles.inputContainer}>
                            <TextInput
                                ref={input1}
                                returnKeyType='next'
                                onSubmitEditing={() => handleReturnKeyPress(input1)}
                                style={styles.input}
                                autoCapitalize='none'
                                placeholder='Email'
                                placeholderTextColor='#BEBFBF'
                                keyboardType='email-address'
                                autoFocus={true}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
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
                                placeholderTextColor='#BEBFBF'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                            />
                        </View>


                        <View style={styles.forgotPasswordButtonContainer}>
                            <TouchableOpacity>
                                <Text style={styles.forgotPasswordButton}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>



                        <Pressable
                            onPress={handleSubmit}
                            style={styles.loginContainer(isValid)}
                        >
                            <Text style={styles.buttonText}>Log in</Text>
                        </Pressable>



                        <View style={styles.signUpContainer}>
                            <Text style={styles.text}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>

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
        margin: 11,
        padding: 10,
    },
    loginContainer: isValid => ({
        width: '92%',
        padding: 7,
        alignItems: 'center',
        backgroundColor: isValid ? '#049DF8' : null,
        marginTop: 30,
        borderRadius: 10,
        borderWidth: isValid ? 0 : 1,
        borderColor: '#fff',
    }),
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