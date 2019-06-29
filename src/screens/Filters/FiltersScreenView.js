import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';


function FiltersScreen({}) {
    return (
        <View style={s.container}>
            <Text>Filters Screen</Text>
        </View>
    )
};

FiltersScreen.navigationOptions = {
    headerRight: (
        <TouchableOpacity onPress={() => {NavigationServices.goBack()}} style={s.headerRight} >
            <AntDesign name="filter" size={32} color={colors.primary} />
        </TouchableOpacity>
    ),
    headerTitle: <SearchInput />,
    
    headerStyle: s.header,
    
};

export default FiltersScreen;