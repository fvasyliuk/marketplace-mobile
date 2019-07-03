import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { compose, withHandlers, withState, lifecycle } from 'recompose';
import s from './styles';
import { colors } from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SearchInput({    
    valueSearch,
    onChangeText,
    onSearch, 
    handleFocusSearch,
    refSearch 
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
                ref={refSearch} 
                onFocus={() => {
                    handleFocusSearch(true)
                }} 
                onBlur={() => {
                    handleFocusSearch(false)
                }}        
                value={valueSearch}
                onChangeText={onChangeText}
                style={s.input}
                placeholder="hoodie"
            />
        </View>
    )
}

const enhancer = compose(
    withState('valueSearch', 'setValueSearch', ''),
    withHandlers({
        onChangeText: (props) => (val) => {
            props.setValueSearch(val);  
            props.handleChange(val);                      
        },
    }),
    lifecycle({
        componentDidMount() {
            this.props.setValueSearch(this.props.value)
        }
    }),
);

export default enhancer(SearchInput);