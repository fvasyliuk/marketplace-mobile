import React from 'react';
import T from 'prop-types';
import { View, Text, Button, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import s from './styles';
import screen from '../../..//navigation/screens';
import { NavigationServices} from '../../../services';

const isAndroid = Platform.OS === 'android';

function LoginScreen({
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
                        <View style={s.passwordContainer}>
                            <Text style={s.passwordLabel}>Password</Text>
                            <TextInput 
                                secureTextEntry
                                placeholder="Password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                style={[
                                    s.passwordInput, 
                                    isFocus.password && s.inputFocus, 
                                    touched.email && errors.email && s.errorBorder,
                                ]}                                
                                onFocus={() => handleFocus('password')}
                            />
                        </View>      
                        <View style={s.forgotContainer}>                            
                            <Text style={s.forgotText}>Forgot password?</Text>
                            {touched.password && errors.password ? <Text style={s.errorText}>Wrong password</Text> : null}
                        </View>
                    </View> 
                    <View style={s.bottomContainer}>
                        <View style={s.textBottomContainer}>
                            <Text style={s.textBottom}>
                                Don’t have an account?
                            </Text>
                            <Text 
                                style={s.textBottomRegister} 
                                onPress={() => navigation.navigate({routeName: screen.Register})}
                            >
                                REGISTER
                            </Text>
                            
                        </View>
                        <Button 
                            style={s.loginButton}
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