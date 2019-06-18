import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ProfileNavigator from './ProfileNavigator';
import BrowseNavigator from './BrowseNavigator';
import screens from './screens';

const routes = {
    [screens.ProfileTab]: ProfileNavigator,
    [screens.BrowseTab]: BrowseNavigator,
}

export default createBottomTabNavigator(routes, {
    initialRouteName: screens.BrowseTab,
});

