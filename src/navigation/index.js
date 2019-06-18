import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { NavigationServices } from '../services';
import Navigator from './Navigator';


const NavigatorContainer = createAppContainer(Navigator);

export default () => (
    <NavigatorContainer ref={(nav) => NavigationServices.init(nav)} />
)