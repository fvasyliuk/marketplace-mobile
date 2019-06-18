import React from 'react';
import { View, Text} from 'react-native';
import s from './styles';

function ProfileScreen() {
    return (
        <View style={s.container}> 
            <Text>Profile Screen</Text>
        </View>
    )
};

ProfileScreen.propTypes = {};

export default ProfileScreen;