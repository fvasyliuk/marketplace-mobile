import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import screens from './screens';


const routes = {
    [screens.Main]: MainNavigator,
}

export default createStackNavigator(routes, {
    headerMode: 'none',
    mode: 'modal',
});

