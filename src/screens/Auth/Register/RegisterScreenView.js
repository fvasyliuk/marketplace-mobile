import T from 'prop-types';
import { View, Text, Button } from 'react-native';
import s from './styles';

function RegisterScreen({ 
    onLogin,  
}) {
    return (
        <View style={s.container}> 
            <Text>Register Screen</Text>

            <Button 
                title="Login" 
                onPress={onLogin} 
            />            
        </View>
    )
};

RegisterScreen.navigationOptions = () => ({
    title: 'Register',
    headerStyle: s.header,
});

RegisterScreen.propTypes = {
    onLogin: T.func,
};



export default RegisterScreen;