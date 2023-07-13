import * as Yup from 'yup';
import { Formik } from 'formik';
import { Image, StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { Divider } from 'react-native-elements';
import { useState } from 'react';

const PLACEHOLDER_IMAGE = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?w=1200&ssl=1';

const formSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit'),
})

const FormUploader = ({ navigation }) => {
    const [thumbnailPic, setThumbnailPic] = useState(PLACEHOLDER_IMAGE);

    return (
        <Formik
            initialValues={{ imageUrl: '', caption: '' }}
            validationSchema={formSchema}
            onSubmit={(values) => {
                console.log(values);
                navigation.goBack();
            }}
            validateOnMount={true}
        >
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid,
            }) => (
                <>
                    <View style={styles.container}>
                        <Image
                            style={styles.uploadedImage}
                            source={{ uri: thumbnailPic ? thumbnailPic : PLACEHOLDER_IMAGE }}
                        />
                        <View style={styles.captionContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput
                        onChange={(e) => setThumbnailPic(e.nativeEvent.text)}
                        style={styles.input}
                        placeholder='Enter image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={styles.imageUrlErrorMessage}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} disabled={!isValid} title='share' />
                </>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 20,
    },
    uploadedImage: {
        height: 100,
        width: 100,
    },
    captionContainer: {
        flex: 1,
        marginLeft: 12,
    },
    imageUrlErrorMessage: {
        color: '#F88070',
    },
    input: {
        color: '#fff',
    },
});

export default FormUploader;