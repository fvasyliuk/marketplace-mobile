import { createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings/SettingsScreenContainer';
import screens from './screens';

const routes = {
    [screens.Profile]: ProfileScreen,   
    [screens.Settings]: SettingsScreen, 
}

export default createStackNavigator(routes, {
    initialRouteName: screens.ProfileScreen,
    headerLayoutPreset: 'center',
});

