import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import NewItemModalNavigator from './NewItemModalNavigator';
import screens from './screens';


const routes = {
    [screens.Main]: MainNavigator,
    [screens.NewItemModal]: NewItemModalNavigator,
}

export default createStackNavigator(routes, {
    headerMode: 'none',
    mode: 'modal',
});

