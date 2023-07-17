import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import BACK_BUTTON from '../assets/images/backButton.png';
import { Formik } from 'formik';
import * as Yup from 'yup';

//------------------------------FIREBASE------------------------------
import { FIREBASE_AUTH, db } from '../App';
//------------------------------FIREBASE------------------------------


const RegisterScreen = ({ navigation }) => {

    const RegisterFormSchema = Yup.object().shape({
        username: Yup.string().required('Username cannot be empty.'),
        email: Yup.string().email('Must enter a valid email.').required(),
        password: Yup.string().required().min(8, 'Password must have 8 characters.'),
        confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Both passwords must match.'),
        firstName: Yup.string().required('First name cannot be empty.'),
        lastName: Yup.string().required('Last name cannot be empty.'),
    });

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const input6 = useRef(null);

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

    const handleRegisterUser = async (email, password, username, firstName, lastName,) => {
        try {
            const authUser = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            db.collection('users').add({
                owner_uid: authUser.user.uid,
                email: authUser.email,
                username: username,
                firstName: firstName,
                lastName: lastName,
                gender: '',
                profilePic: '',
            })
            console.log('Successfully registered user!');
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.log(error);
            alert('Unable to register user!');
        }
    };


    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                firstName: '',
                lastName: '',
            }}
            onSubmit={values => {
                handleRegisterUser(
                    values.email,
                    values.password,
                    values.username,
                    values.firstName,
                    values.lastName,
                )
            }}
            validationSchema={RegisterFormSchema}
            validateOnMount={true}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                isValid,
                errors,
            }) => (
                <View style={styles.container}>
                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                style={styles.backButton}
                                source={BACK_BUTTON}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Register Account
                        </Text>
                    </View>




                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            returnKeyType='next'
                            ref={input1}
                            onSubmitEditing={() => handleReturnKeyPress(input1)}
                            autoCapitalize='none'
                            placeholder='Username'
                            value={values.username}
                            onChangeText={handleChange('username')}
                            placeholderTextColor='#BEBFBF'
                            onBlur={handleBlur('username')}
                        />
                        <TextInput
                            style={styles.input}
                            returnKeyType='next'
                            ref={input2}
                            onSubmitEditing={() => handleReturnKeyPress(input2)}
                            autoCapitalize='none'
                            placeholder='Email'
                            value={values.email}
                            onChangeText={handleChange('email')}
                            placeholderTextColor='#BEBFBF'
                            keyboardType='email-address'
                            onBlur={handleBlur('email')}
                        />
                        {errors.email && (
                            <Text style={styles.errorMessage}>
                                {errors.email}
                            </Text>
                        )}
                        <TextInput
                            style={styles.input}
                            returnKeyType='next'
                            ref={input3}
                            onSubmitEditing={() => handleReturnKeyPress(input3)}
                            placeholder='Password'
                            secureTextEntry={true}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            placeholderTextColor='#BEBFBF'
                            onBlur={handleBlur('password')}
                        />
                        {errors.password && (
                            <Text style={styles.errorMessage}>
                                {errors.password}
                            </Text>
                        )}
                        <TextInput
                            style={styles.input}
                            returnKeyType='next'
                            ref={input4}
                            onSubmitEditing={() => handleReturnKeyPress(input4)}
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                            value={values.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            placeholderTextColor='#BEBFBF'
                            onBlur={handleBlur('confirmPassword')}
                        />
                        {errors.confirmPassword && (
                            <Text style={styles.errorMessage}>
                                {errors.confirmPassword}
                            </Text>
                        )}
                        <TextInput
                            style={styles.input}
                            returnKeyType='next'
                            ref={input5}
                            onSubmitEditing={() => handleReturnKeyPress(input5)}
                            placeholder='First Name'
                            value={values.firstName}
                            onChangeText={handleChange('firstName')}
                            placeholderTextColor='#BEBFBF'
                            onBlur={handleBlur('firstName')}
                        />
                        <TextInput
                            style={styles.input}
                            returnKeyType='done'
                            ref={input6}
                            onSubmitEditing={() => handleReturnKeyPress(input6)}
                            placeholder='Last Name'
                            value={values.lastName}
                            onChangeText={handleChange('lastName')}
                            placeholderTextColor='#BEBFBF'
                            onBlur={handleBlur('lastName')}
                        />
                    </View>
                    <View style={styles.signUpButton(isValid)}>
                        <TouchableOpacity
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#000',
    },
    errorMessage: {
        color: 'red',
    },
    backButtonContainer: {
        margin: 10,
    },
    backButton: {
        height: 30,
        width: 30,
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontWeight: '200',
        fontSize: 40,
        marginBottom: 30,
    },
    signUpButton: (isValid) => ({
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: isValid ? null : '#fff',
        marginTop: 40,
        borderRadius: 10,
        padding: 10,
        backgroundColor: isValid ? '#049DF8' : null,
    }),
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    inputContainer: {
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        margin: 10,
        padding: 10,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: '#fff',
        color: '#fff',
    },
});

export default RegisterScreen;