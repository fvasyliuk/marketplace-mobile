import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import s from './styles';
import { ProductList, Avatar, Touchable } from '../../components';
import { Feather, Ionicons } from '@expo/vector-icons';
import { NavigationServices } from '../../services';
import { colors } from '../../styles';


function ProfileScreen({
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

ProfileScreen.navigationOptions = ({ navigation }) => {   
    
    if (
        !navigation.state.params
        || !navigation.state.params.viewer
    ) {
        return {
            headerTitle: (
                <ActivityIndicator size="small" />
            ),
            headerStyle: s.header,
        };
    };

    const { viewer, backProductId } = navigation.state.params;

    return {        
        headerTitle: (
            <View style={s.headerTitleOwner}>
                <Avatar name={viewer.fullName} source={viewer.avatar} size={92} />
                <Text style={s.headerTitleOwnerText}>{viewer.fullName}</Text>
            </View>
        ),
        headerTitleStyle: s.headerTitle,
        headerStyle: s.header,
        headerRight: (
            <Touchable 
                useOpacityAndroid
                onPress={() => {NavigationServices.navigateToSettings()}}
                style={s.headerRight}
            >
                <Feather name="settings" size={32}/>
            </Touchable>
        ),
        headerLeft: (
            <Touchable 
                useOpacityAndroid
                onPress={() => {NavigationServices.navigateToProduct(backProductId)}}
                style={s.headerLeft}
            >
                <Ionicons name="ios-arrow-back" size={32}/>
            </Touchable>
        )
    };
};

export default ProfileScreen;