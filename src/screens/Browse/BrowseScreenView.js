import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ProductList} from '../../components';
import s from './styles';
import Header from './components/Header/Header';


function BrowseScreen({
    list,
    isLoading,
    isLoadingMore, 
    fetchItems,
    fetchItemsMore,
    openProduct,   
    isFocus, 
}) {      
    if (isLoading) {
        return (
            <ActivityIndicator size="large" />                
        );
    } 

    if (!list.length) {
        return (
            <View>
                <Text>Empty list</Text>
            </View>
        );
    }
    return (
        <View style={s.container}>            
            <ProductList 
                items={list} 
                isLoading={isLoading}
                isLoadingMore={isLoadingMore} 
                fetchItems={fetchItems} 
                fetchItemsMore={fetchItemsMore}
                onItemPress={openProduct}
            /> 
            {isFocus && (
                <View style={s.searchContainer}>
                    <Text >
                        Absolut
                    </Text>
                </View>
            ) }           
        </View>
    )
};

BrowseScreen.navigationOptions = ({ navigation }) => {

    if ( navigation.state.params ) {
        const filterOnPress = navigation.state.params.handleNavigateToFilters;
        const handleChange = navigation.state.params.handleChange;
        const value = navigation.state.params.values.keywords;
        const onSearch = navigation.state.params.onSearch;
        const setIsFocus = navigation.state.params.setIsFocus;
        
        return {
            header: (
                <Header 
                    filterOnPress={filterOnPress}
                    handleChange={handleChange}
                    value={value}
                    onSearch={onSearch}
                    setIsFocus={setIsFocus}
                />                
            )
        }; 
    }
              
};

export default BrowseScreen;