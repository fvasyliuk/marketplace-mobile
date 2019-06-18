import React from 'react';
import T from 'prop-types';
import { View, Text, Button, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import s from './styles';

const isAndroid = Platform.OS === 'android';

function LoginScreen({ 
    onSubmit,  
    onEmailFocus,
    onPasswordFocus,
    isFocus,
    initialValues,
    validationSchema,
}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({
                handleChange,
                handleBlur,
                values,
                handleSubmit,
            }) => (             
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={isAndroid ? 90 : 40} style={s.container}>
                    <View style={s.inputContainer}>
                        <View style={s.emailContainer}>
                            <Text style={s.emailLabel}>Email</Text>
                            <TextInput 
                                placeholder="Email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                style={[s.emailInput, isFocus && s.emailFocus]}                                
                                onFocus={onEmailFocus}
                            />
                        </View>    
                        <View style={s.passwordContainer}>
                            <Text style={s.passwordLabel}>Password</Text>
                            <TextInput 
                                placeholder="Password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                style={[s.passwordInput, isFocus && s.passwordFocus]}                                
                                onFocus={onPasswordFocus}
                            />
                        </View>                
                    </View> 
                    <View style={s.bottomContainer}>
                        <Button 
                            title="Login"  
                            type="submit"
                            onPress={handleSubmit}
                        />  
                    </View>   
                </KeyboardAvoidingView>
            )}
        </Formik>
        
    )
};

LoginScreen.navigationOptions = () => ({
    title: 'Login',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
})

LoginScreen.propTypes = {
    onLogin: T.func,
    email: T.string,
    onChangeEmail: T.func,
};



export default LoginScreen;