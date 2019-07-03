import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import s from './styles';
import { ProductList, Avatar, Touchable } from '../../components';



function OwnerScreen({
    productsList,
    isLoading,
    fetchUserProducts,
    openProduct,
}) {
    return (
        <View style={s.container}>
            <ProductList 
                items={productsList} 
                isLoading={isLoading}                 
                fetchItems={fetchUserProducts}                
                onItemPress={openProduct}
            />
        </View>
    )
};

OwnerScreen.navigationOptions = ({ navigation }) => {    
    const {owner} = navigation.state.params;
    if (!owner) {
        return {
            headerTitle: (
                <ActivityIndicator size="small" />
            ),
            headerStyle: s.header,
        };
    };
        
    return {        
        headerTitle: (
            <View style={s.headerTitleOwner}>
                <Avatar name={owner.fullName} source={owner.avatar} size={92} />
                <Text style={s.headerTitleOwnerText}>{owner.fullName}</Text>
            </View>
        ),
        headerTitleStyle: s.headerTitle,
        headerStyle: s.header,

    };
};

export default OwnerScreen;