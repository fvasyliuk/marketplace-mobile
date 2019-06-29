import React from 'react';
import T from 'prop-types';
import { View, Text, Button, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import s from './styles';
import screen from '../../..//navigation/screens';

const isAndroid = Platform.OS === 'android';

function RegisterScreen({
    navigation, 
    onSubmit,  
    handleFocus,
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
                errors,
                touched,
            }) => (             
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={isAndroid ? 90 : 40} style={s.container}>
                    <View style={s.inputContainer}>
                        <View style={s.emailContainer}>                            
                            <Text style={s.emailLabel}>Email</Text>
                            <TextInput 
                                placeholder="Email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                style={[
                                    s.emailInput, 
                                    isFocus.email && s.inputFocus, 
                                    touched.email && errors.email && s.errorBorder,
                                ]}                                
                                onFocus={() => handleFocus('email')}
                            />
                        </View>    
                        {touched.email && errors.email 
                            ? <Text style={s.errorText}>Please, enter valid email.</Text> 
                            : null
                        }  
                        <View style={s.passwordContainer}>
                            <Text style={s.passwordLabel}>Password</Text>
                            <TextInput 
                                secureTextEntry 
                                value={values.password}
                                onChangeText={handleChange('password')}
                                style={[
                                    s.passwordInput, 
                                    isFocus.password && s.inputFocus, 
                                    touched.repeatPassword && errors.password && s.errorBorder,
                                ]}                                
                                onFocus={() => handleFocus('password')}
                            />
                        </View>  
                        {touched.password && errors.password 
                            ? <Text style={s.errorText}>
                                Password must contain 6-20 characters.
                            </Text> 
                            : null
                        }  
                        <View style={s.passwordContainer}>
                            <Text style={s.passwordLabel}>Repeat password</Text>
                            <TextInput 
                                secureTextEntry                                
                                value={values.repeatPassword}
                                onChangeText={handleChange('repeatPassword')}
                                style={[
                                    s.passwordInput, 
                                    isFocus.repeatPassword && s.inputFocus, 
                                    touched.repeatPassword && errors.repeatPassword && s.errorBorder,
                                ]}                                
                                onFocus={() => handleFocus('repeatPassword')}
                            />
                        </View>                              
                        {touched.repeatPassword && errors.repeatPassword 
                            ? <Text style={s.errorText}>Passwords don’t match.</Text> 
                            : null
                        }                        
                    </View> 
                    <View style={s.bottomContainer}>
                        <View style={s.textBottomContainer}>
                            <Text style={s.textBottom}>
                                Already have an account?
                            </Text>
                            <Text 
                                style={s.textBottomRegister} 
                                onPress={() => navigation.navigate({routeName: screen.Login})}
                            >
                                LOGIN
                            </Text>
                            
                        </View>
                        <Button 
                            style={s.registerButton}
                            title="Register"  
                            type="submit"
                            onPress={handleSubmit}
                        />  
                    </View>   
                </KeyboardAvoidingView>
            )}
        </Formik>
        
    )
};

RegisterScreen.navigationOptions = () => ({
    title: 'Register',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
})

RegisterScreen.propTypes = {
    onLogin: T.func,
    email: T.string,
    onChangeEmail: T.func,
};



export default RegisterScreen;