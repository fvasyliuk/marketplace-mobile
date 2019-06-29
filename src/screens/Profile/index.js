import React from 'react';
import { View, Text} from 'react-native';
import s from './styles';
import { NavigationServices } from '../../services';

function ProfileScreen() {
    return (
        <View style={s.container}> 
            <Text onPress={() => NavigationServices.navigateToSettings()}>Profile Screen</Text>
        </View>
    )
};

ProfileScreen.propTypes = {};

export default ProfileScreen;