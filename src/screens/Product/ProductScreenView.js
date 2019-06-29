import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import { OwnerInfo } from './components';
import { MaterialIcons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';

function ProductScreen({
    product,
    numberOfLines,
    owner,
}) {
    if (!owner) {
        return <ActivityIndicator size="large" />
    }
    return (
        <ScrollView style={s.container}> 
            <View style={s.top}>
                <Image 
                    source={{uri: product.photos[0]}}
                    style={{width: '100%', height: 456}} 
                />
                <View style={s.imageTextContainer}>
                    <View style={s.textImage}>
                        <Text style={s.textImageTitle}>
                            {product.title}
                        </Text>
                        <Text style={s.textImageTitle}>
                            ${product.price}
                        </Text>
                    </View>
                    <View style={s.textImage}>
                        <Text style={s.textImageBottom}>
                            {product.createdAt}
                        </Text>
                        <View style={s.imageLocationContainer}>
                            <MaterialIcons name="location-on" size={16} color={colors.borderColor}/>
                            <Text style={s.textImageBottom}>
                                {product.location}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={s.bottom}> 
                <View style={s.productDescription}>
                    { product.description 
                        ? <Text numberOfLines={numberOfLines}>
                            {product.description}
                        </Text> 
                        : null
                    }  
                </View>                                  
                <View style={s.userInfo}>
                    <OwnerInfo owner={owner}/>
                </View>
            </View>            
        </ScrollView>
    )
};

ProductScreen.navigationOptions = {
    
    headerTransparent: s.header,
    headerTintColor: colors.white,
};

export default ProductScreen;