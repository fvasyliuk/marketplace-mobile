import React from 'react';
import T from 'prop-types';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  Touchable  from '../Touchable';
import s from './styles';
import { colors } from '../../styles';


function ProductItem({ 
    item, 
    handleLike,
    onPressItem, 
}) {
    
    const uri = item.photos && item.photos[0] 
        ? item.photos[0]  
        : "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
        <Touchable 
            style={s.container} 
            onPress={onPressItem}
            containerStyle={s.container}
        >            
            <Image 
                source={{uri}} 
                style={s.image} 
            />            
            <View style={s.bottomContainer}>
                <Text style={s.title} numberOfLines={1}>
                    {item.title}
                </Text>
                <View style={s.bottom}>
                    <Text style={s.price}>{item.price}</Text>
                    <Touchable onPress={handleLike} hitSlop={7}>
                        <Ionicons 
                            name="ios-bookmark"
                            size={24}                              
                            color={item.saved ? colors.primary : colors.borderColor}         
                                     
                        />
                    </Touchable>                    
                </View>
            </View>            
        </Touchable>
    );
};

ProductItem.propTypes = {};



export default ProductItem;