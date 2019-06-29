import React from 'react';
import { View, Text} from 'react-native';
import s from './styles';

function SettingsScreen() {
    return (
        <View style={s.container}> 
            <Text>Settings Screen</Text>
        </View>
    )
};

SettingsScreen.navigationOptions = {
    title: 'Settings',
    headerStyle: s.header,
    headerTitleStyle: s.headerTitle,
};

export default SettingsScreen;