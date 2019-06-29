import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProductList, SearchInput } from '../../components';
import s from './styles';
import { colors } from '../../styles';


function BrowseScreen({
    list,
    isLoading,
    isLoadingMore, 
    fetchLatest,
    fetchLatestMore,
    openProduct,
}) {
    return (
        <View style={s.container}>
            <ProductList 
                items={list} 
                isLoading={isLoading}
                isLoadingMore={isLoadingMore} 
                fetchItems={fetchLatest} 
                fetchItemsMore={fetchLatestMore}
                onItemPress={openProduct}
            />
        </View>
    )
};

BrowseScreen.navigationOptions = {
    headerRight: (
        <TouchableOpacity onPress={() => {NavigationServices.goBack()}} style={s.headerRight} >
            <AntDesign name="filter" size={32} color={colors.primary} />
        </TouchableOpacity>
    ),
    headerTitle: <SearchInput />,
    
    headerStyle: s.header,
    
};

export default BrowseScreen;