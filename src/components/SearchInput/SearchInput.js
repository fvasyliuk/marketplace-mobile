import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { compose, withHandlers, withState } from 'recompose';
import s from './styles';
import { colors } from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SearchInput({
    onSearch,
    search,
    onChangeText,
}) {
    return(    
        <View style={s.container}>
            <TouchableOpacity onPress={onSearch}>
                <Ionicons 
                    name="ios-search"
                    size={32}
                    color={colors.primary}
                    style={s.leftIcon}
                />
            </TouchableOpacity>
            <TextInput 
                value={search}
                onChangeText={onChangeText}
                style={s.input}
                placeholder="hoodie"
            />
        </View>
    )
}

const enhancer = compose(
    withState('search', 'setSearch', ''),
    withHandlers({
       onSearch: (props) => () => {

       },
       onChangeText: (props) => (value) => {
           props.setSearch(value)
       }
    }),
);

export default enhancer(SearchInput);