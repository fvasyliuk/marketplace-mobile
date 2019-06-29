import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { OwnerInfo } from './components';
import { MaterialIcons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';

function ProfileScreen({
    
}) {
    return (
        <ScrollView style={s.container}> 
                        
        </ScrollView>
    )
};

ProfileScreen.navigationOptions = {
    
    headerTransparent: s.header,
    headerTintColor: colors.white,
};

export default ProfileScreen;