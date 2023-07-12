import * as Yup from 'yup';
import { Formik } from 'formik';
import PLACEHOLDER_IMAGE from '../../assets/images/placeholderImage.png';
import { Image, StyleSheet, View, TextInput } from 'react-native';

const schema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
});

const FormUploader = () => {
    return (
        <Formik
            initialValues={{ imageUrl: '', caption: '' }}
            validationSchema={schema}
            onSubmit={(values) => console.log(values)}
        >
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isInvalid,
            }) => (
                <View style={styles.container}>
                    <Image
                        style={styles.uploadedImage}
                        source={PLACEHOLDER_IMAGE}
                    />
                    <View>
                        <TextInput
                            placeholder='Write a caption...'
                            placeholderTextColor='gray'
                        />
                        <TextInput
                            placeholder='Enter image Url'
                            placeholderTextColor='gray'
                        />
                    </View>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    uploadedImage: {
        height: 100,
        width: 100,
    },
});

export default FormUploader;