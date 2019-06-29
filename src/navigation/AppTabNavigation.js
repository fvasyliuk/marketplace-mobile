import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileNavigator from './ProfileNavigator';
import BrowseNavigator from './BrowseNavigator';
import SavedScreen from '../screens/Saved/SavedScreenContainer';
import InboxScreen from '../screens/Inbox/InboxScreenContainer';
import Empty from '../screens/Empty';
import CustomTabBar from './components/CustomTabBar';
import screens from './screens';
import { colors } from '../styles';
import s from './styles';

const routes = {
    [screens.BrowseTab]: {
        screen: BrowseNavigator,
        navigationOptions: {
            tabBarIcon: (props) => (
                <Ionicons 
                    name="ios-search"
                    size={32}
                    color={props.focused ? colors.primary : colors.tabNavigation.icon}
                />
            ),
            tabBarLabel: (props) => (
                <Text style={[props.focused ? colors.primary : colors.tabNavigation.icon, s.labelCenter]}>
                    Browse
                </Text>
            )
        },
    },
    [screens.Saved]: {
        screen: SavedScreen,
        navigationOptions: {
            tabBarIcon: (props) => (
                <Ionicons 
                    name="ios-bookmark"
                    size={32}
                    color={props.focused ? colors.primary : colors.tabNavigation.icon}
                />
            ),
            tabBarLabel: (props) => (
                <Text style={[props.focused ? colors.primary : colors.tabNavigation.icon, s.labelCenter]}>
                    Saved
                </Text>
            )
        },
    },
    [screens.TabCreateItem]: {
        screen: Empty,
        navigationOptions: {
            tabBarIcon: (props) => (
                <Ionicons 
                    name="ios-add-circle"
                    size={32}
                    color={colors.primary}
                />
            ),
            tabBarLabel: <View />
        },
    },
    [screens.Inbox]: {
        screen: InboxScreen,
        navigationOptions: {
            tabBarIcon: (props) => (
                <MaterialIcons 
                    name="inbox"
                    size={32}
                    color={props.focused ? colors.primary : colors.tabNavigation.icon}
                />
            ),
            tabBarLabel: (props) => (
                <Text style={[props.focused ? colors.primary : colors.tabNavigation.icon, s.labelCenter]}>
                    Inbox
                </Text>
            )
        },
    },
    [screens.ProfileTab]: {
        screen: ProfileNavigator,
        navigationOptions: {
            tabBarIcon: (props) => (
                <MaterialCommunityIcons 
                    name="account"
                    size={32}
                    color={props.focused ? colors.primary : colors.tabNavigation.icon}
                />
            ),
            tabBarLabel: (props) => (
                <Text style={[props.focused ? colors.primary : colors.tabNavigation.icon, s.labelCenter]}>
                    Profile
                </Text>
            )
        },
    },
}

export default createBottomTabNavigator(routes, {
    initialRouteName: screens.BrowseTab,
    tabBarComponent: CustomTabBar,
    tabBarOptions: {
        style: {height: 70, paddingVertical: 10},        
    },
});

